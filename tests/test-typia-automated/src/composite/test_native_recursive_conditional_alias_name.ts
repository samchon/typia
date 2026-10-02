import typia, { Primitive, tags } from "typia";

// 1. the reported case: Primitive over a self-recursive union carrying Date.
//    Primitive rewrites the Date arm to a date-time string and keeps the array
//    arm pointing back at the whole union.
type Node = Date | Node[];
const isPrimitiveNode = typia.createIs<Primitive<Node>>();
const assertPrimitiveNode = typia.createAssert<Primitive<Node>>();
const schemaPrimitiveNode = typia.json.schema<Primitive<Node>>();

// 2. the same graph without Primitive: any self-recursive conditional alias
//    instantiates to a union whose array member's type argument is that union
type Rec<T> = T extends Date
  ? string
  : T extends (infer U)[]
    ? Rec<U>[]
    : never;
const isRec = typia.createIs<Rec<Node>>();

// 3. the second report: the recursion sits behind an object property
interface JsonObject {
  [key: string]: JsonValue;
}
type JsonValue = string | number | boolean | null | JsonObject | JsonValue[];
interface Output {
  at: Date;
  payload: JsonValue;
}
const isOutput = typia.createIs<Primitive<Output>>();

// controls: recursions that already named themselves through an alias or a
// declaration must keep transforming and must not take the cycle placeholder
type Named = (string & tags.Format<"date-time">) | Named[];
const isNamed = typia.createIs<Named>();
const schemaNamed = typia.json.schema<Named>();

type SelfArray = SelfArray[];
const isSelfArray = typia.createIs<SelfArray>();

interface ICategory {
  name: string;
  children: ICategory[];
}
const isCategory = typia.createIs<ICategory>();
const schemaCategory = typia.json.schema<ICategory>();
const fixture = {
  isPrimitiveNode,
  assertPrimitiveNode,
  schemaPrimitiveNode,
  isRec,
  isOutput,
  isNamed,
  schemaNamed,
  isSelfArray,
  isCategory,
  schemaCategory,
};

/**
 * Verifies recursive conditional alias name in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * recursiveConditionalAliasNameSource declarations; the former
 * recursiveConditionalAliasNameRuntimeRunner observations execute in the
 * existing automated worker. This detects a generated program whose output
 * compiles but changes these runtime decisions: primitive top date-time;
 * primitive top plain string; primitive top number; primitive top null;
 * primitive top Date instance; primitive empty array.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from recursiveConditionalAliasNameRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Handwritten nested arrays/objects and their alias contracts determine accepted shapes and rejecting neighbors. Cyclic and ordinary values retain the alias's actual scalar/container branches; expected verdicts are not derived by another generated checker.
 * @evidence contracts/testing.md#distinguishing-cases Preserves primitive top date-time; primitive top plain string; primitive top number; primitive top null; primitive top Date instance; primitive empty array; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_recursive_conditional_alias_name in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed recursiveConditionalAliasNameSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/recursive_conditional_alias_name_transform_test.go recursiveConditionalAliasNameRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_recursive_conditional_alias_name = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  let failures: any = 0;
  const expect: any = (label: any, actual: any, expected: any): any => {
    if (actual !== expected) {
      console.log(
        "FAIL " + label + ": expected " + expected + ", got " + actual,
      );
      failures++;
    }
  };

  const DATE: any = "2020-01-01T00:00:00.000Z";

  // --- 1. Primitive<Node>: date-time string or (recursively) an array of those ---
  expect("primitive top date-time", mod.isPrimitiveNode(DATE), true);
  expect("primitive top plain string", mod.isPrimitiveNode("nope"), false);
  expect("primitive top number", mod.isPrimitiveNode(1), false);
  expect("primitive top null", mod.isPrimitiveNode(null), false);
  expect(
    "primitive top Date instance",
    mod.isPrimitiveNode(new Date(0)),
    false,
  );
  expect("primitive empty array", mod.isPrimitiveNode([]), true);
  expect("primitive flat array", mod.isPrimitiveNode([DATE, DATE]), true);
  expect(
    "primitive flat array bad member",
    mod.isPrimitiveNode([DATE, "nope"]),
    false,
  );
  expect("primitive nested array", mod.isPrimitiveNode([[[DATE]], []]), true);
  expect("primitive nested bad leaf", mod.isPrimitiveNode([[[1]]]), false);
  expect(
    "primitive nested Date instance",
    mod.isPrimitiveNode([[new Date(0)]]),
    false,
  );

  // depth boundary: the emitted validator recurses through one function, so a
  // deep value must not need a deeper emit
  let deep: any = [DATE];
  for (let i: any = 0; i < 64; ++i) deep = [deep];
  expect("primitive deeply nested", mod.isPrimitiveNode(deep), true);
  let deepBad: any = [1];
  for (let i: any = 0; i < 64; ++i) deepBad = [deepBad];
  expect(
    "primitive deeply nested bad leaf",
    mod.isPrimitiveNode(deepBad),
    false,
  );

  // the emitted recursive validator must not be fooled by a self-referencing value
  const cyclic: any = [];
  cyclic.push(cyclic);
  expect(
    "primitive cyclic value terminates",
    mod.isPrimitiveNode(cyclic),
    true,
  );

  // --- 1b. assert reports the arm, and passes what is valid ---
  expect(
    "assert passes",
    JSON.stringify(mod.assertPrimitiveNode([DATE])),
    JSON.stringify([DATE]),
  );
  let assertPath: any = "";
  let assertExpected: any = "";
  try {
    mod.assertPrimitiveNode(["nope"]);
    failures++;
    console.log("FAIL assert should have thrown");
  } catch (exp: any) {
    assertPath = String(exp.path);
    assertExpected = String(exp.expected);
  }
  expect("assert names the path", assertPath, "$input[0]");
  // The expected string is the same name the fix has to keep readable: the arm
  // itself, not a structural dump of the cycle it sits in.
  expect(
    "assert names the arm",
    assertExpected.includes('Format<"date-time">'),
    true,
  );
  expect("assert expectation is bounded", assertExpected.length <= 64, true);

  // --- 2. the bare recursive conditional alias: string or (recursively) arrays ---
  expect("rec top string", mod.isRec("anything"), true);
  expect("rec top number", mod.isRec(1), false);
  expect("rec nested array", mod.isRec([["a"], []]), true);
  expect("rec nested bad leaf", mod.isRec([[1]]), false);

  // --- 3. the recursion behind an object property ---
  expect(
    "output valid",
    mod.isOutput({ at: DATE, payload: { a: [1, "b", null, { c: true }] } }),
    true,
  );
  expect("output bad date", mod.isOutput({ at: "nope", payload: 1 }), false);
  expect("output missing key", mod.isOutput({ payload: 1 }), false);
  expect(
    "output bad payload",
    mod.isOutput({ at: DATE, payload: undefined }),
    false,
  );

  // --- controls: the recursions that already worked ---
  expect("named recursive union", mod.isNamed([[DATE]]), true);
  expect("named recursive union bad leaf", mod.isNamed([["nope"]]), false);
  expect("self array alias", mod.isSelfArray([[], [[]]]), true);
  expect("self array alias bad leaf", mod.isSelfArray([1]), false);
  expect(
    "category valid",
    mod.isCategory({ name: "a", children: [{ name: "b", children: [] }] }),
    true,
  );
  expect(
    "category bad child",
    mod.isCategory({ name: "a", children: [{ name: 1, children: [] }] }),
    false,
  );

  // --- the schema names the cycle without dumping its structural expansion ---
  const unit: any = mod.schemaPrimitiveNode;
  const keys: any = Object.keys(unit.components.schemas || {});
  expect("schema has one component", keys.length, 1);
  const key: any = keys[0];
  if (key !== undefined) {
    // The pre-fix walk could only have produced a name built from the checker's
    // elided rendering, which runs to several hundred characters; the placeholder
    // keeps it in the same range as an ordinary named component.
    expect("component name is bounded", key.length <= 64, true);
    expect("component is an array", unit.components.schemas[key].type, "array");
    const items: any = unit.components.schemas[key].items;
    const refs: any = (items.oneOf || []).filter(
      (elem: any): any => elem.$ref !== undefined,
    );
    expect(
      "array items reference the component itself",
      refs.length === 1 && refs[0].$ref === "#/components/schemas/" + key,
      true,
    );
    expect(
      "array items keep the date-time arm",
      (items.oneOf || []).some((elem: any): any => elem.format === "date-time"),
      true,
    );
  }

  // controls: a recursion reached through a declaration names every component it
  // emits from that declaration, so the placeholder never applies to one
  expect(
    "category component name",
    Object.keys(mod.schemaCategory.components.schemas || {})[0],
    "ICategory",
  );
  const namedKeys: any = Object.keys(mod.schemaNamed.components.schemas || {});
  expect(
    "named recursion names every component from its declaration",
    namedKeys.length !== 0 &&
      namedKeys.every((elem: any): any => elem.includes("Named")),
    true,
  );

  if (failures > 0) {
    throw new Error(failures + " assertion(s) failed");
  }
  console.log("all recursive-conditional-alias cases passed");
};
