package com.shrivatsav.monomail.data.repository

data class EmailContact(
    val name: String,
    val email: String
)

private val contactCache = mutableSetOf<EmailContact>()

fun indexContactsFromThreads(threads: List<com.shrivatsav.monomail.data.model.EmailThread>) {
    threads.forEach { thread ->
        contactCache.add(EmailContact(thread.from, thread.fromEmail))
    }
}

fun indexContactsFromEmails(emails: List<com.shrivatsav.monomail.data.model.Email>) {
    emails.forEach { email ->
        contactCache.add(EmailContact(email.from, email.fromEmail))
    }
}

fun suggestContacts(query: String): List<EmailContact> {
    if (query.isBlank()) return emptyList()
    val q = query.trim().lowercase()
    return contactCache
        .filter { it.name.lowercase().contains(q) || it.email.lowercase().contains(q) }
        .distinctBy { it.email.lowercase() }
        .sortedBy { it.name }
        .take(5)
}
