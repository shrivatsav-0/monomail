import SwiftUI
import shared

/// New-email composer. Backed by the shared ComposeViewModel (recipient suggestions,
/// validation, send via the active provider).
struct ComposeView: View {
    @Environment(\.dismiss) private var dismiss

    private let viewModel: ComposeViewModel
    @StateObject private var state: FlowObserver<ComposeUiState>
    @StateObject private var suggestions: FlowObserver<[ContactSuggestionProviderEmailContact]>

    @State private var to: String = ""
    @State private var subject: String = ""
    @State private var body: String = ""

    init() {
        let fromEmail = AppDI.module.accountManager.getActiveAccount()?.email ?? ""
        let vm = ComposeViewModel(
            repository: AppDI.module.repository,
            contactProvider: AppDI.module.contactProvider,
            fromEmail: fromEmail,
            mode: .new,
            replyTo: nil,
            originalSubject: nil,
            originalBody: nil,
            threadId: nil,
            messageId: nil
        )
        self.viewModel = vm
        _state = StateObject(wrappedValue: FlowObserver(initial: vm.state.value))
        _suggestions = StateObject(wrappedValue: FlowObserver(initial: vm.suggestions.value))
    }

    var body: some View {
        NavigationStack {
            Form {
                Section {
                    TextField("To", text: $to)
                        .keyboardType(.emailAddress)
                        .textInputAutocapitalization(.never)
                        .onChange(of: to) { _, newValue in viewModel.updateTo(value: newValue) }

                    if !suggestions.value.isEmpty {
                        ForEach(suggestions.value, id: \.email) { contact in
                            Button {
                                viewModel.selectSuggestion(contact: contact)
                                to = contact.email
                            } label: {
                                VStack(alignment: .leading) {
                                    Text(contact.name)
                                    Text(contact.email).font(.caption).foregroundColor(.secondary)
                                }
                            }
                        }
                    }

                    TextField("Subject", text: $subject)
                        .onChange(of: subject) { _, newValue in viewModel.updateSubject(value: newValue) }
                }
                Section {
                    TextField("Message", text: $body, axis: .vertical)
                        .lineLimit(8...20)
                        .onChange(of: body) { _, newValue in viewModel.updateBody(value: newValue) }
                }
                if let error = state.value.error {
                    Text(error).foregroundColor(.red)
                }
            }
            .navigationTitle("New Message")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .cancellationAction) {
                    Button("Cancel") { dismiss() }
                }
                ToolbarItem(placement: .confirmationAction) {
                    if state.value.isSending {
                        ProgressView()
                    } else {
                        Button("Send") { viewModel.send() }
                    }
                }
            }
            .onAppear {
                state.start(viewModel.state)
                suggestions.start(viewModel.suggestions)
            }
            .onChange(of: state.value.isSent) { _, sent in
                if sent { dismiss() }
            }
        }
    }
}
