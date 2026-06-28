//#region ../config/dist/public-CqcmI_Th.mjs
const bindings = {
	agentMemory: (options) => ({
		type: "agent-memory",
		...options
	}),
	ai: (options) => ({
		type: "ai",
		...options
	}),
	aiSearch: (options) => ({
		type: "ai-search",
		...options
	}),
	aiSearchNamespace: (options) => ({
		type: "ai-search-namespace",
		...options
	}),
	analyticsEngineDataset: (options) => ({
		type: "analytics-engine-dataset",
		...options
	}),
	artifacts: (options) => ({
		type: "artifacts",
		...options
	}),
	assets: () => ({ type: "assets" }),
	browser: (options) => ({
		type: "browser",
		...options
	}),
	d1: (options) => ({
		type: "d1",
		...options
	}),
	dispatchNamespace: (options) => ({
		type: "dispatch-namespace",
		...options
	}),
	durableObject: (options) => ({
		type: "durable-object",
		...options
	}),
	flagship: (options) => ({
		type: "flagship",
		...options
	}),
	hyperdrive: (options) => ({
		type: "hyperdrive",
		...options
	}),
	images: (options) => ({
		type: "images",
		...options
	}),
	json: (value) => ({
		type: "json",
		value
	}),
	kv: (options) => ({
		type: "kv",
		...options
	}),
	logfwdr: (options) => ({
		type: "logfwdr",
		...options
	}),
	media: (options) => ({
		type: "media",
		...options
	}),
	mtlsCertificate: (options) => ({
		type: "mtls-certificate",
		...options
	}),
	pipeline: (options) => ({
		type: "pipeline",
		...options
	}),
	queue: (options) => ({
		type: "queue",
		...options
	}),
	rateLimit: (options) => ({
		type: "rate-limit",
		...options
	}),
	r2: (options) => ({
		type: "r2",
		...options
	}),
	secret: () => ({ type: "secret" }),
	secretsStoreSecret: (options) => ({
		type: "secrets-store-secret",
		...options
	}),
	sendEmail: (options) => ({
		type: "send-email",
		...options
	}),
	stream: (options) => ({
		type: "stream",
		...options
	}),
	text: (value) => ({
		type: "text",
		value
	}),
	vectorize: (options) => ({
		type: "vectorize",
		...options
	}),
	versionMetadata: () => ({ type: "version-metadata" }),
	vpcService: (options) => ({
		type: "vpc-service",
		...options
	}),
	vpcNetwork: (options) => ({
		type: "vpc-network",
		...options
	}),
	webSearch: (options) => ({
		type: "web-search",
		...options
	}),
	worker: (options) => ({
		type: "worker",
		...options
	}),
	workerLoader: () => ({ type: "worker-loader" })
};
/**
* Triggers builder for configuring event triggers.
*
* @example
* ```typescript
* import { defineWorker, triggers } from "@cloudflare/config";
*
* export default defineWorker({
*   triggers: [
*     triggers.fetch({ pattern: "example.com/*", zone: "example.com" }),
*     triggers.queue({ name: "my-queue" }),
*     triggers.scheduled({ schedule: "0 * * * *" }),
*     triggers.scheduled({ schedule: "30 0 * * *" }),
*   ],
* });
* ```
*/
const triggers = {
	fetch: (options) => ({
		type: "fetch",
		...options
	}),
	queue: (options) => ({
		type: "queue",
		...options
	}),
	scheduled: (options) => ({
		type: "scheduled",
		...options
	})
};
/**
* Exports builder for configuring Worker exports.
*
* @example
* ```typescript
* import { defineWorker, exports } from "@cloudflare/config";
*
* export default defineWorker({
*   exports: {
*     MyDurableObject: exports.durableObject({ storage: "sqlite" }),
*   },
* });
* ```
*/
const exports = { durableObject: (options) => ({
	type: "durable-object",
	...options
}) };
const CONFIG = Symbol.for("@cloudflare/config:worker-config");
function defineWorker(config) {
	return {
		[CONFIG]: config,
		durableObject(options) {
			return {
				type: "durable-object",
				...options
			};
		},
		worker(options) {
			return {
				type: "worker",
				...options
			};
		}
	};
}

//#endregion
//#region src/experimental-config/wrangler-definition.ts
function defineWranglerConfig(config) {
	return config;
}

//#endregion
export { bindings, defineWorker, defineWranglerConfig, exports, triggers };
//# sourceMappingURL=experimental-config.mjs.map