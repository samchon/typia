import typia from "typia";

type TemplateUnion =
  | {
      kind: `a_${string}`;
      common: string;
    }
  | {
      kind: `b_${string}`;
      common: string;
      b?: string;
    };
type Nested = {
  value: TemplateUnion;
};
const isTemplate = typia.createIs<TemplateUnion>();
const cloneTemplate = typia.plain.createClone<TemplateUnion>();
const eqTemplateFactory = typia.compare.createEquals<TemplateUnion>();
const eqTemplateDirect = (x: TemplateUnion, y: TemplateUnion) =>
  typia.compare.equals<TemplateUnion>(x, y);
const isNested = typia.createIs<Nested>();
const cloneNested = typia.plain.createClone<Nested>();
const eqNestedFactory = typia.compare.createEquals<Nested>();
const eqNestedDirect = (x: Nested, y: Nested) =>
  typia.compare.equals<Nested>(x, y);
const eqLiteral = typia.compare.createEquals<
  | {
      kind: "a";
      value: number;
    }
  | {
      kind: "b";
      value: string;
    }
>();
const eqOptional = typia.compare.createEquals<
  | {
      a?: number;
    }
  | {
      b?: string;
    }
>();
const eqPlain = typia.compare.createEquals<{
  kind: string;
  common: string;
  b?: string;
}>();
/**
 * Verifies template-literal discriminants preserve selected-arm data.
 *
 * Runs the real native callbacks so correct emitted text cannot hide a runtime
 * routing, receiver, copy or comparison defect.
 *
 * 1. Produce the same typed public callbacks as the original regression.
 * 2. Execute its authored inputs and independent result assertions.
 * 3. Propagate every failed comparison to the shared suite runner.
 *
 * @evidence contracts/testing.md#behavioral-verification Both template arms, invalid prefix, nested wrappers, direct/factory calls, optional-union, literal-union and plain-object controls retain literal result and payload expectations.
 * @evidence contracts/testing.md#independent-expectations The retained literal expectations encode the authored type/value contract, not emitted-source patterns. Type-level equality assertions, where present, remain compiled independently of runtime comparisons.
 * @evidence contracts/testing.md#distinguishing-cases Both template arms, invalid prefix, nested wrappers, direct/factory calls, optional-union, literal-union and plain-object controls retain literal result and payload expectations.
 * @evidence contracts/testing.md#execution-ownership The matching exported composite is discovered by TestServant in test-typia-automated. Private typed producers and deliberately unchecked JavaScript-style runtime inputs preserve the original test boundary.
 * @evidence contracts/e2e.md#necessary-boundary Real typia public calls are transformed and their callbacks execute in Node. Go unit assertions on metadata or emitted text cannot detect a runtime result, receiver or mutation defect.
 * @evidence contracts/e2e.md#shared-execution This case reuses the suite's generated project and shared worker with other native composites; it starts no compiler project, subprocess or artifact installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation constructs its own sample inputs and observations. Cases that mutate arrays, objects or recursive graphs retain those values within that invocation, and do not cache verdicts. The suite owns and closes the worker.
 * @evidence contracts/e2e.md#preserved-coverage The original typed fixture, public call forms and runtime input/assertion population are retained here. No original runtime distinction is removed from this case. Execution is verified by the canonical suite run, not this comment.
 */
export const test_native_compare_template_literal_union = (): void => {
  // Untyped callers intentionally exercise invalid inputs beyond static TypeScript acceptance.
  const mod: Record<string, any> = {
    isTemplate,
    cloneTemplate,
    eqTemplateFactory,
    eqTemplateDirect,
    isNested,
    cloneNested,
    eqNestedFactory,
    eqNestedDirect,
    eqLiteral,
    eqOptional,
    eqPlain,
  };
  let failures = 0;
  const expect = (label: string, actual: unknown, expected: unknown) => {
    if (actual !== expected) {
      console.log(
        "FAIL " + label + ": expected " + expected + ", got " + actual,
      );
      failures++;
    }
  };
  const expectJson = (label: string, actual: unknown, expected: unknown) =>
    expect(label, JSON.stringify(actual), JSON.stringify(expected));
  const left: any = { kind: "b_x", common: "same", b: "left" };
  const right: any = { kind: "b_x", common: "same", b: "right" };
  expect("is left b member", mod.isTemplate(left), true);
  expect("is right b member", mod.isTemplate(right), true);
  expectJson("clone left preserves b", mod.cloneTemplate(left), left);
  expectJson("clone right preserves b", mod.cloneTemplate(right), right);
  expect("factory different b", mod.eqTemplateFactory(left, right), false);
  expect("direct different b", mod.eqTemplateDirect(left, right), false);
  expect(
    "factory equal b",
    mod.eqTemplateFactory(
      { kind: "b_x", common: "same", b: "same" },
      { kind: "b_x", common: "same", b: "same" },
    ),
    true,
  );
  expect(
    "direct equal b",
    mod.eqTemplateDirect(
      { kind: "b_x", common: "same", b: "same" },
      { kind: "b_x", common: "same", b: "same" },
    ),
    true,
  );
  expect(
    "a member different common",
    mod.eqTemplateFactory(
      { kind: "a_x", common: "left" },
      { kind: "a_x", common: "right" },
    ),
    false,
  );
  expect(
    "a member equal",
    mod.eqTemplateFactory(
      { kind: "a_x", common: "same" },
      { kind: "a_x", common: "same" },
    ),
    true,
  );
  expect(
    "a versus b",
    mod.eqTemplateFactory(
      { kind: "a_x", common: "same" },
      { kind: "b_x", common: "same" },
    ),
    false,
  );
  const invalidLeft: any = { kind: "c_x", common: "same" };
  const invalidRight: any = { kind: "c_x", common: "same" };
  expect(
    "is rejects invalid discriminator",
    mod.isTemplate(invalidLeft),
    false,
  );
  expect(
    "factory rejects invalid discriminator",
    mod.eqTemplateFactory(invalidLeft, invalidRight),
    false,
  );
  expect(
    "direct rejects invalid discriminator",
    mod.eqTemplateDirect(invalidLeft, invalidRight),
    false,
  );
  const nestedLeft: any = { value: left };
  const nestedRight: any = { value: right };
  expect("nested is left", mod.isNested(nestedLeft), true);
  expect("nested is right", mod.isNested(nestedRight), true);
  expectJson(
    "nested clone left preserves b",
    mod.cloneNested(nestedLeft),
    nestedLeft,
  );
  expectJson(
    "nested clone right preserves b",
    mod.cloneNested(nestedRight),
    nestedRight,
  );
  expect(
    "nested factory different b",
    mod.eqNestedFactory(nestedLeft, nestedRight),
    false,
  );
  expect(
    "nested direct different b",
    mod.eqNestedDirect(nestedLeft, nestedRight),
    false,
  );
  expect(
    "nested factory equal b",
    mod.eqNestedFactory(
      { value: { kind: "b_x", common: "same", b: "same" } },
      { value: { kind: "b_x", common: "same", b: "same" } },
    ),
    true,
  );
  expect(
    "nested invalid discriminator",
    mod.eqNestedFactory({ value: invalidLeft }, { value: invalidRight }),
    false,
  );
  expect(
    "literal member different",
    mod.eqLiteral({ kind: "a", value: 1 }, { kind: "a", value: 2 }),
    false,
  );
  expect(
    "literal cross member",
    mod.eqLiteral({ kind: "a", value: 1 }, { kind: "b", value: "1" }),
    false,
  );
  expect(
    "optional member different",
    mod.eqOptional({ a: 1 }, { a: 2 }),
    false,
  );
  expect(
    "optional second payload follows first match",
    mod.eqOptional({ b: "left" }, { b: "right" }),
    true,
  );
  expect(
    "plain different",
    mod.eqPlain(
      { kind: "b_x", common: "same", b: "left" },
      { kind: "b_x", common: "same", b: "right" },
    ),
    false,
  );
  expect(
    "plain equal",
    mod.eqPlain(
      { kind: "b_x", common: "same", b: "same" },
      { kind: "b_x", common: "same", b: "same" },
    ),
    true,
  );
  if (failures > 0) {
    throw new Error(failures + " assertion(s) failed");
  }
};
