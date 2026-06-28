import * as unenv from 'unenv';
import { Preset } from 'unenv';

/**
 * Creates the Cloudflare preset for the given compatibility date and compatibility flags
 *
 * @param compatibilityDate workerd compatibility date
 * @param compatibilityFlags workerd compatibility flags
 * @returns The cloudflare preset
 */
declare function getCloudflarePreset({ compatibilityDate, compatibilityFlags, }: Partial<Compatibility>): Preset;
type Compatibility = {
    /** The compatibility date to be used when computing overrides. */
    compatibilityDate: string;
    /** The compatibility flags to be used when computing overrides. */
    compatibilityFlags: string[];
};

/**
 * List of the Node.js built-in modules without the `node:` prefix.
 *
 * Generated using `module.builtinModules` in Node.js 24.11.1
 *
 * Note: All new modules are expected to use the `node:` prefix.
 * See https://github.com/nodejs/node/blob/main/doc/contributing/collaborator-guide.md#introducing-new-modules
 */
declare const nonPrefixedNodeModules: string[];
/**
 * @deprecated Use getCloudflarePreset instead.
 */
declare const cloudflare: unenv.Preset;

export { cloudflare, getCloudflarePreset, nonPrefixedNodeModules };
