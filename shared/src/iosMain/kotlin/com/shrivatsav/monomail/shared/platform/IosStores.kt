package com.shrivatsav.monomail.shared.platform

import platform.Foundation.NSUserDefaults

/** iOS preferences store backed by NSUserDefaults. */
class IosKeyValueStore(
    private val defaults: NSUserDefaults = NSUserDefaults.standardUserDefaults
) : KeyValueStore {
    override fun getString(key: String): String? = defaults.stringForKey(key)
    override fun putString(key: String, value: String) = defaults.setObject(value, forKey = key)
    override fun getBoolean(key: String): Boolean? =
        if (defaults.objectForKey(key) == null) null else defaults.boolForKey(key)
    override fun putBoolean(key: String, value: Boolean) = defaults.setBool(value, forKey = key)
    override fun getFloat(key: String): Float? =
        if (defaults.objectForKey(key) == null) null else defaults.floatForKey(key)
    override fun putFloat(key: String, value: Float) = defaults.setFloat(value, forKey = key)
    override fun remove(key: String) = defaults.removeObjectForKey(key)
    override fun clear() {
        defaults.dictionaryRepresentation().keys.forEach { k ->
            (k as? String)?.let { defaults.removeObjectForKey(it) }
        }
    }
}
