import typia from "typia";

declare const sym: unique symbol;
declare const joined: unique symbol;
declare const solo: unique symbol;
declare const invoke: unique symbol;
declare const COMPUTED: "computed";

/**
 * Defines ordinary name beside unique and well-known symbol members.
 *
 * @evidence contracts/testing.md#behavioral-verification is/assert/validate accept symbol-bearing and plain name shapes; schema requires only name.
 * @evidence contracts/testing.md#independent-expectations Literal name:string and authored wrong/missing name establish independent verdicts.
 * @evidence contracts/testing.md#distinguishing-cases Symbol members omitted versus present both accept; wrong name rejects.
 * @evidence contracts/testing.md#execution-ownership test_native_symbol_key_member_filter owns the actual native runtime/schema observations; this declaration supplies the fixture shape.
 */
export interface Symbolic {
  name: string;
  [sym]: number;
  [Symbol.toStringTag]: string;
}

/**
 * Defines ordinary quoted, numeric and computed-string key controls.
 *
 * @evidence contracts/testing.md#behavioral-verification The local isControlled callback must accept all four authored fields.
 * @evidence contracts/testing.md#independent-expectations Explicit string/number/boolean values and missing-key literals provide the oracle.
 * @evidence contracts/testing.md#distinguishing-cases Missing computed or numeric key rejects; symbol filtering must preserve these ordinary keys.
 * @evidence contracts/testing.md#execution-ownership test_native_symbol_key_member_filter owns the actual native runtime/schema observations; this declaration supplies the fixture shape.
 */
export interface Controlled {
  plain: string;
  "quoted-key": number;
  42: boolean;
  [COMPUTED]: string;
}

/**
 * Defines a string/symbol-member intersection fixture.
 *
 * @evidence contracts/testing.md#behavioral-verification Native isJoined accepts id with or without symbol storage.
 * @evidence contracts/testing.md#independent-expectations Authored id:string and missing id determine literal expected booleans.
 * @evidence contracts/testing.md#distinguishing-cases Present or omitted symbol accepts; absent id rejects.
 * @evidence contracts/testing.md#execution-ownership test_native_symbol_key_member_filter owns the actual native runtime/schema observations; this declaration supplies the fixture shape.
 */
export type Joined = { id: string } & { [joined]: number };

/**
 * Defines a fixture whose only declaration is symbol-named.
 *
 * @evidence contracts/testing.md#behavioral-verification Native isSolo accepts a symbol-bearing object and an empty object.
 * @evidence contracts/testing.md#independent-expectations Independent object versus null literals distinguish empty structural shape from accepting anything.
 * @evidence contracts/testing.md#distinguishing-cases Empty object accepts; null rejects; symbol value content is not checked.
 * @evidence contracts/testing.md#execution-ownership test_native_symbol_key_member_filter owns the actual native runtime/schema observations; this declaration supplies the fixture shape.
 */
export interface SoloSymbol {
  [solo]: number;
}

/**
 * Defines a string id beside a symbol-named method.
 *
 * @evidence contracts/testing.md#behavioral-verification Native isMethodic accepts id with or without the symbol callback.
 * @evidence contracts/testing.md#independent-expectations The authored string id and positive boolean literals supply the expectation.
 * @evidence contracts/testing.md#distinguishing-cases Present/absent symbol method contrasts; malformed id rejection is not separately enrolled for this arm.
 * @evidence contracts/testing.md#execution-ownership test_native_symbol_key_member_filter owns the actual native runtime/schema observations; this declaration supplies the fixture shape.
 */
export interface Methodic {
  id: string;
  [invoke](): number;
}

const isSymbolic = typia.createIs<Symbolic>();
const assertSymbolic = typia.createAssert<Symbolic>();
const validateSymbolic = typia.createValidate<Symbolic>();
const isControlled = typia.createIs<Controlled>();
const isJoined = typia.createIs<Joined>();
const isSolo = typia.createIs<SoloSymbol>();
const isMethodic = typia.createIs<Methodic>();
const schemas = typia.json.schemas<[Symbolic, Joined, SoloSymbol, Methodic]>();
const fixture = {
  isSymbolic,
  assertSymbolic,
  validateSymbolic,
  isControlled,
  isJoined,
  isSolo,
  isMethodic,
  schemas,
};

/**
 * Verifies symbol key member filter in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * symbolKeyMemberFilterSource declarations; the former
 * symbolKeyMemberFilterRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: is real Joined value; is real SoloSymbol
 * value; is real Methodic value; is plain Symbolic shape; is plain Joined
 * shape; is empty SoloSymbol shape.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from symbolKeyMemberFilterRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Symbol-named members remain outside the serialized/string-key structural population, while the declared ordinary properties determine validation. Handwritten symbol-bearing and wrong ordinary-property values distinguish filtering from dropping the whole object shape.
 * @evidence contracts/testing.md#distinguishing-cases Preserves is real Joined value; is real SoloSymbol value; is real Methodic value; is plain Symbolic shape; is plain Joined shape; is empty SoloSymbol shape; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_symbol_key_member_filter in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed symbolKeyMemberFilterSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/symbol_key_member_filter_transform_test.go symbolKeyMemberFilterRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_symbol_key_member_filter = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const sym: any = Symbol("sym");
  const joined: any = Symbol("joined");
  const solo: any = Symbol("solo");
  const invoke: any = Symbol("invoke");

  const expect: any = (label: any, actual: any, expected: any): any => {
    if (actual !== expected) {
      throw new Error(label + ": expected " + expected + " but got " + actual);
    }
  };

  // A real object carrying every declared member — including the symbol-keyed
  // ones — passes its own guard.
  expect(
    "is real Symbolic value",
    mod.isSymbolic({ name: "x", [sym]: 1, [Symbol.toStringTag]: "Symbolic" }),
    true,
  );
  expect("is real Joined value", mod.isJoined({ id: "x", [joined]: 1 }), true);
  expect("is real SoloSymbol value", mod.isSolo({ [solo]: 1 }), true);
  expect(
    "is real Methodic value",
    mod.isMethodic({ id: "x", [invoke]: (): any => 1 }),
    true,
  );

  // A symbol-keyed member is not part of the structural JSON shape, so a plain
  // object carrying only the string keys is accepted too.
  expect("is plain Symbolic shape", mod.isSymbolic({ name: "x" }), true);
  expect("is plain Joined shape", mod.isJoined({ id: "x" }), true);
  expect("is empty SoloSymbol shape", mod.isSolo({}), true);
  expect("is plain Methodic shape", mod.isMethodic({ id: "x" }), true);

  // The string-keyed shape is still validated structurally.
  expect("reject wrong Symbolic name type", mod.isSymbolic({ name: 1 }), false);
  expect("reject missing Symbolic name", mod.isSymbolic({}), false);
  expect("reject missing Joined id", mod.isJoined({ [joined]: 1 }), false);
  expect("reject non-object SoloSymbol", mod.isSolo(null), false);

  // Positive controls: string / number / computed-string keys still resolve.
  expect(
    "is Controlled value",
    mod.isControlled({ plain: "a", "quoted-key": 1, 42: true, computed: "c" }),
    true,
  );
  expect(
    "reject missing computed-string key",
    mod.isControlled({ plain: "a", "quoted-key": 1, 42: true }),
    false,
  );
  expect(
    "reject missing numeric key",
    mod.isControlled({ plain: "a", "quoted-key": 1, computed: "c" }),
    false,
  );

  // assert / validate accept a real value without touching a mangled key.
  expect(
    "assert real Symbolic returns input",
    typeof mod.assertSymbolic({
      name: "x",
      [sym]: 1,
      [Symbol.toStringTag]: "Symbolic",
    }),
    "object",
  );
  expect(
    "validate real Symbolic succeeds",
    mod.validateSymbolic({
      name: "x",
      [sym]: 1,
      [Symbol.toStringTag]: "Symbolic",
    }).success,
    true,
  );

  let threw: any = false;
  try {
    mod.assertSymbolic({ name: 1 });
  } catch (_exp: any) {
    threw = true;
  }
  expect("assert rejects wrong name type", threw, true);

  // The emitted schemas carry no mangled symbol key.
  const serialized: any = JSON.stringify(mod.schemas);
  for (const marker of [
    "@sym@",
    "@toStringTag@",
    "@joined@",
    "@solo@",
    "@invoke@",
    "�",
  ]) {
    if (serialized.includes(marker)) {
      throw new Error(
        "schema references a mangled symbol key (" +
          marker +
          "): " +
          serialized,
      );
    }
  }
  const required: any = JSON.stringify(
    mod.schemas.components.schemas.Symbolic.required,
  );
  expect(
    "Symbolic schema requires only its string key",
    required,
    JSON.stringify(["name"]),
  );
};
