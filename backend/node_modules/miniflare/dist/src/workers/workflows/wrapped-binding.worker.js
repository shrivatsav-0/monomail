// src/workers/workflows/wrapped-binding.worker.ts
var WorkflowImpl = class {
  constructor(binding) {
    this.binding = binding;
  }
  binding;
  async get(id) {
    let instanceHandle = new InstanceImpl(id, this.binding);
    return await instanceHandle.status(), instanceHandle;
  }
  async create(options) {
    using result = await this.binding.create(options);
    return new InstanceImpl(result.id, this.binding);
  }
  async createBatch(options) {
    return (await this.binding.createBatch(options)).map((res) => new InstanceImpl(res.id, this.binding));
  }
  async unsafeGetBindingName() {
    return this.binding.unsafeGetBindingName();
  }
  async unsafeAbort(instanceId, reason) {
    return this.binding.unsafeAbort(instanceId, reason);
  }
  async unsafeGetInstanceModifier(instanceId) {
    return this.binding.unsafeGetInstanceModifier(instanceId);
  }
  async unsafeWaitForStepResult(instanceId, name, index) {
    return this.binding.unsafeWaitForStepResult(instanceId, name, index);
  }
  async unsafeWaitForStatus(instanceId, status) {
    return await this.binding.unsafeWaitForStatus(instanceId, status);
  }
  async unsafeGetOutputOrError(instanceId, isOutput) {
    return this.binding.unsafeGetOutputOrError(instanceId, isOutput);
  }
}, InstanceImpl = class {
  constructor(id, binding) {
    this.id = id;
    this.binding = binding;
  }
  id;
  binding;
  async getInstance() {
    return await this.binding.get(this.id);
  }
  async pause() {
    using instance = await this.getInstance();
    await instance.pause();
  }
  async resume() {
    using instance = await this.getInstance();
    await instance.resume();
  }
  async terminate() {
    using instance = await this.getInstance();
    await instance.terminate();
  }
  async restart(options) {
    using instance = await this.getInstance();
    await instance.restart(options);
  }
  async status() {
    using instance = await this.getInstance(), res = await instance.status();
    return structuredClone(res);
  }
  async sendEvent(args) {
    using instance = await this.getInstance();
    await instance.sendEvent(args);
  }
};
function makeBinding(env) {
  return new WorkflowImpl(env.binding);
}
var wrapped_binding_worker_default = makeBinding;
export {
  wrapped_binding_worker_default as default,
  makeBinding
};
//# sourceMappingURL=wrapped-binding.worker.js.map
