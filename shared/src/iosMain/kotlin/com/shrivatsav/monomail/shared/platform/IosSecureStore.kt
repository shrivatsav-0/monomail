package com.shrivatsav.monomail.shared.platform

import kotlinx.cinterop.ExperimentalForeignApi
import kotlinx.cinterop.addressOf
import kotlinx.cinterop.alloc
import kotlinx.cinterop.convert
import kotlinx.cinterop.memScoped
import kotlinx.cinterop.ptr
import kotlinx.cinterop.reinterpret
import kotlinx.cinterop.usePinned
import kotlinx.cinterop.value
import platform.CoreFoundation.CFDataRef
import platform.CoreFoundation.CFDictionaryAddValue
import platform.CoreFoundation.CFDictionaryCreateMutable
import platform.CoreFoundation.CFMutableDictionaryRef
import platform.CoreFoundation.CFStringCreateWithCString
import platform.CoreFoundation.CFStringRef
import platform.CoreFoundation.CFTypeRefVar
import platform.CoreFoundation.CFDataCreate
import platform.CoreFoundation.CFRelease
import platform.CoreFoundation.kCFAllocatorDefault
import platform.CoreFoundation.kCFBooleanTrue
import platform.CoreFoundation.kCFStringEncodingUTF8
import platform.CoreFoundation.kCFTypeDictionaryKeyCallBacks
import platform.CoreFoundation.kCFTypeDictionaryValueCallBacks
import platform.Foundation.CFBridgingRelease
import platform.Foundation.NSData
import platform.Security.SecItemAdd
import platform.Security.SecItemCopyMatching
import platform.Security.SecItemDelete
import platform.Security.errSecSuccess
import platform.Security.kSecAttrAccessible
import platform.Security.kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly
import platform.Security.kSecAttrAccount
import platform.Security.kSecAttrService
import platform.Security.kSecClass
import platform.Security.kSecClassGenericPassword
import platform.Security.kSecMatchLimit
import platform.Security.kSecMatchLimitOne
import platform.Security.kSecReturnData
import platform.Security.kSecValueData

/**
 * Keychain-backed secure store for secrets (OAuth refresh tokens, account JSON).
 * Items use kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly: readable only after
 * the first unlock after boot, and never synced to iCloud / other devices.
 */
@OptIn(ExperimentalForeignApi::class)
class IosSecureStore(
    private val service: String = "com.shrivatsav.monomail.secure"
) : SecureStore {

    override fun getString(key: String): String? = memScoped {
        val query = baseQuery(key)
        CFDictionaryAddValue(query, kSecReturnData, kCFBooleanTrue)
        CFDictionaryAddValue(query, kSecMatchLimit, kSecMatchLimitOne)
        val result = alloc<CFTypeRefVar>()
        val status = SecItemCopyMatching(query, result.ptr)
        CFRelease(query)
        if (status != errSecSuccess) return@memScoped null
        val data = CFBridgingRelease(result.value) as? NSData ?: return@memScoped null
        data.toByteArray()?.decodeToString()
    }

    override fun putString(key: String, value: String) {
        remove(key)
        val dict = baseQuery(key)
        val data = cfData(value.encodeToByteArray())
        CFDictionaryAddValue(dict, kSecValueData, data)
        CFDictionaryAddValue(dict, kSecAttrAccessible, kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly)
        SecItemAdd(dict, null)
        data?.let { CFRelease(it) }
        CFRelease(dict)
    }

    override fun remove(key: String) {
        val query = baseQuery(key)
        SecItemDelete(query)
        CFRelease(query)
    }

    override fun clear() {
        val dict = newDict()
        CFDictionaryAddValue(dict, kSecClass, kSecClassGenericPassword)
        val svc = cfString(service)
        CFDictionaryAddValue(dict, kSecAttrService, svc)
        SecItemDelete(dict)
        svc?.let { CFRelease(it) }
        CFRelease(dict)
    }

    private fun baseQuery(account: String): CFMutableDictionaryRef {
        val dict = newDict()
        CFDictionaryAddValue(dict, kSecClass, kSecClassGenericPassword)
        val svc = cfString(service)
        val acc = cfString(account)
        CFDictionaryAddValue(dict, kSecAttrService, svc)
        CFDictionaryAddValue(dict, kSecAttrAccount, acc)
        svc?.let { CFRelease(it) }
        acc?.let { CFRelease(it) }
        return dict
    }

    private fun newDict(): CFMutableDictionaryRef =
        CFDictionaryCreateMutable(
            kCFAllocatorDefault, 0,
            kCFTypeDictionaryKeyCallBacks.ptr,
            kCFTypeDictionaryValueCallBacks.ptr
        )!!

    private fun cfString(s: String): CFStringRef? =
        CFStringCreateWithCString(kCFAllocatorDefault, s, kCFStringEncodingUTF8)

    private fun cfData(bytes: ByteArray): CFDataRef? {
        if (bytes.isEmpty()) return CFDataCreate(kCFAllocatorDefault, null, 0)
        return bytes.usePinned { pinned ->
            CFDataCreate(kCFAllocatorDefault, pinned.addressOf(0).reinterpret(), bytes.size.convert())
        }
    }

    private fun NSData.toByteArray(): ByteArray? {
        val len = this.length.toInt()
        if (len == 0) return ByteArray(0)
        val out = ByteArray(len)
        out.usePinned { pinned ->
            platform.posix.memcpy(pinned.addressOf(0), this.bytes, this.length)
        }
        return out
    }
}
