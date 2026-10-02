import {
  classifyFactory,
  classifyMemo,
  classifyModel,
} from "./fixtures/classify_cross_calls";
import RuntimeMemo, * as RuntimeModel from "./fixtures/classify_model";

/**
 * Verifies cross-module classify synthesizes the correct runtime constructor
 * imports.
 *
 * Producer callbacks import model names only as types. Their transformed body
 * must independently obtain runtime constructors; importing models in this
 * consumer cannot repair a missing binding inside the producer module.
 *
 * 1. Load the transformed producer and independently import its model classes.
 * 2. Assert original seed values, instance identities and prototype methods.
 *
 * @evidence contracts/testing.md#behavioral-verification Actual callbacks from classify_cross_calls reconstruct original model seeds, and instanceof checks compare them to independently imported constructors.
 * @evidence contracts/testing.md#independent-expectations Literal seeds, declared class methods and exported constructor identity establish expectations independently of native output.
 * @evidence contracts/testing.md#distinguishing-cases Named Model field-copy, named Factory.from and inline default-export Memo field-copy preserve distinct type-only import provenance, from versus field-copy strategies and prototype method behavior.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_plain_classify_cross_module; adjacent fixture modules declare models and the original callback call sites without registering extra test entries.
 * @evidence contracts/e2e.md#necessary-boundary The real native producer must convert type-only imports to usable runtime class references across module boundaries; same-file class declarations would conceal this defect.
 * @evidence contracts/e2e.md#shared-execution Model and callback modules compile in the existing automated project and execute through the shared worker, without an independent project, build or process.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation allocates fresh seeds and results; imported constructor modules are immutable fixture identities, and the suite closes its worker on completion or failure.
 * @evidence contracts/e2e.md#preserved-coverage Original plainClassifyCrossModuleMain type-only imports and every plainClassifyCrossModuleRunner input, constructor comparison, value and method assertion execute in these producer and consumer modules.
 */
export const test_native_plain_classify_cross_module = (): void => {
  const assert: (cond: unknown, msg: string) => asserts cond = (cond, msg) => {
    if (!cond) throw new Error(msg);
  };

  // cross-module field copy: Model is imported only as a TYPE at the call site,
  // so the emitted module must add a VALUE import to reach Model.prototype.
  const m = classifyModel({ id: 3 });
  assert(
    m instanceof RuntimeModel.Model,
    "cross-module field-copy should yield a Model instance",
  );
  assert(m.greet() === "m3", "Model method should work, got: " + m.greet());

  // cross-module from construction
  const w = classifyFactory({ value: 7 });
  assert(
    w instanceof RuntimeModel.Factory,
    "cross-module from should yield a Factory instance",
  );
  assert(
    w.value === 7,
    "Factory.from seed should reconstruct, got: " + w.value,
  );

  // cross-module DEFAULT-export field copy: the value import must be a default import
  const memo = classifyMemo({ text: "hi" });
  assert(
    memo instanceof RuntimeMemo,
    "cross-module default-export field-copy should yield a Memo instance",
  );
  assert(memo.show() === "hi", "Memo method should work, got: " + memo.show());
};
