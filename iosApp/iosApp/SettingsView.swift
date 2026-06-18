import SwiftUI
import shared

/// Settings screen backed by the shared SettingsViewModel.
/// NOTE: enum picker cases (ThemeMode/FontScale/...) use SKIE's lowercased Swift
/// names; adjust to the generated header if they differ (toggles are unaffected).
struct SettingsView: View {
    private let viewModel = SettingsViewModel(repository: AppDI.module.settingsRepository)
    @StateObject private var settings: FlowObserver<AppSettings>
    @StateObject private var updateState: FlowObserver<UpdateState>

    private let appVersion = "1.2.6"

    init() {
        let vm = SettingsViewModel(repository: AppDI.module.settingsRepository)
        _settings = StateObject(wrappedValue: FlowObserver(initial: vm.settings.value))
        _updateState = StateObject(wrappedValue: FlowObserver(initial: vm.updateState.value))
    }

    var body: some View {
        let s = settings.value
        Form {
            Section("Appearance") {
                Picker("Theme", selection: themeBinding(s)) {
                    Text("System").tag(ThemeMode.system)
                    Text("Light").tag(ThemeMode.light)
                    Text("Dark").tag(ThemeMode.dark)
                }
                Toggle("Show dividers", isOn: bind(s.showDividers) { viewModel.setShowDividers(v: $0) })
                Toggle("Compact list", isOn: bind(s.compactList) { viewModel.setCompactList(v: $0) })
                Toggle("Show snippet", isOn: bind(s.showSnippet) { viewModel.setShowSnippet(v: $0) })
            }

            Section("Inbox") {
                Toggle("Unified inbox", isOn: bind(s.unifiedInboxEnabled) { viewModel.setUnifiedInboxEnabled(v: $0) })
                Toggle("Organize by thread", isOn: bind(s.organizeByThread) { viewModel.setOrganizeByThread(v: $0) })
                Toggle("Smart grouping", isOn: bind(s.smartGroupingEnabled) { viewModel.setSmartGroupingEnabled(v: $0) })
            }

            Section("Composing") {
                Toggle("Confirm before sending", isOn: bind(s.confirmBeforeSending) { viewModel.setConfirmBeforeSending(v: $0) })
                Toggle("Email notifications", isOn: bind(s.emailNotifications) { viewModel.setEmailNotifications(v: $0) })
            }

            Section("Account") {
                Button("Sign out", role: .destructive) {
                    if let id = AppDI.module.accountManager.getActiveAccount()?.id {
                        AppDI.module.authManager.signOut(accountId: id)
                    }
                }
            }

            Section("About") {
                HStack { Text("Version"); Spacer(); Text(appVersion).foregroundColor(.secondary) }
                Button {
                    viewModel.checkForUpdates(currentVersion: appVersion)
                } label: {
                    HStack {
                        Text("Check for updates")
                        Spacer()
                        switch updateState.value {
                        case .checking: ProgressView()
                        case .upToDate: Text("Up to date").foregroundColor(.secondary)
                        case .updateAvailable: Text("Update available").foregroundColor(.blue)
                        case .error: Text("Error").foregroundColor(.red)
                        default: EmptyView()
                        }
                    }
                }
            }
        }
        .navigationTitle("Settings")
        .onAppear {
            settings.start(viewModel.settings)
            updateState.start(viewModel.updateState)
        }
    }

    private func themeBinding(_ s: AppSettings) -> Binding<ThemeMode> {
        Binding(get: { s.themeMode }, set: { viewModel.setThemeMode(mode: $0) })
    }

    private func bind(_ value: Bool, _ setter: @escaping (Bool) -> Void) -> Binding<Bool> {
        Binding(get: { value }, set: { setter($0) })
    }
}
