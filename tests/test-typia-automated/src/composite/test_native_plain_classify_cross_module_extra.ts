import RuntimeStamp from "./fixtures/classify_defmodel";
import {
  makeModel,
  makeNote,
  makePoint,
  makeStamp,
} from "./fixtures/classify_extra_calls";
import RuntimeNote from "./fixtures/classify_fcmodel";
import * as RuntimeNS from "./fixtures/classify_nsmodel";

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
 * @evidence contracts/testing.md#behavioral-verification Actual callbacks from classify_extra_calls reconstruct original model seeds, and instanceof checks compare them to independently imported constructors.
 * @evidence contracts/testing.md#independent-expectations Literal seeds, declared class methods and exported constructor identity establish expectations independently of native output.
 * @evidence contracts/testing.md#distinguishing-cases Namespace Point.from and Model field-copy plus separate-statement default-export Stamp.from and Note field-copy preserve distinct type-only import provenance, from versus field-copy strategies and prototype method behavior.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_plain_classify_cross_module_extra; adjacent fixture modules declare models and the original callback call sites without registering extra test entries.
 * @evidence contracts/e2e.md#necessary-boundary The real native producer must convert type-only imports to usable runtime class references across module boundaries; same-file class declarations would conceal this defect.
 * @evidence contracts/e2e.md#shared-execution Model and callback modules compile in the existing automated project and execute through the shared worker, without an independent project, build or process.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation allocates fresh seeds and results; imported constructor modules are immutable fixture identities, and the suite closes its worker on completion or failure.
 * @evidence contracts/e2e.md#preserved-coverage Original plainClassifyExtraMain type-only imports and every plainClassifyExtraRunner input, constructor comparison, value and method assertion execute in these producer and consumer modules.
 */
export const test_native_plain_classify_cross_module_extra = (): void => {
  const assert: (cond: unknown, msg: string) => asserts cond = (cond, msg) => {
    if (!cond) throw new Error(msg);
  };

  // namespaced cross-module from
  const p = makePoint({ x: 1, y: 2 });
  assert(
    p instanceof RuntimeNS.NS.Point,
    "namespaced cross-module from should yield NS.Point",
  );
  assert(p.sum() === 3, "NS.Point.from should reconstruct, got: " + p.sum());

  // namespaced cross-module field-copy
  const m = makeModel({ id: 4 });
  assert(
    m instanceof RuntimeNS.NS.Model,
    "namespaced cross-module field-copy should yield NS.Model",
  );
  assert(m.greet() === "m4", "NS.Model method should work, got: " + m.greet());

  // separate-statement default-export from/new
  const s = makeStamp({ value: 7 });
  assert(
    s instanceof RuntimeStamp,
    "separate-default from should yield a Stamp instance",
  );
  assert(s.value === 7, "Stamp.from seed should reconstruct, got: " + s.value);

  // separate-statement default-export field-copy
  const n = makeNote({ text: "hi" });
  assert(
    n instanceof RuntimeNote,
    "separate-default field-copy should yield a Note instance",
  );
  assert(n.show() === "hi", "Note method should work, got: " + n.show());
};
