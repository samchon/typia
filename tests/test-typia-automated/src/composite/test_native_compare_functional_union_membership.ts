import typia from "typia";

type FunctionUnion =
  | {
      handler: (value: number) => string;
      common: string;
    }
  | {
      handler: string;
      common: string;
      label: string;
    };
type StringFirstUnion =
  | {
      handler: string;
      common: string;
      label: string;
    }
  | {
      handler: (value: number) => string;
      common: string;
    };
type FunctionSecondUnion =
  | {
      handler: string;
      common: string;
    }
  | {
      handler: (value: number) => string;
      common: string;
      label: string;
    };
type CoverPartial = {
  common: string;
  label: string;
};
type Nested = {
  value: FunctionUnion;
};
type FunctionSecondNested = {
  value: FunctionSecondUnion;
};
interface Delegated {
  value: string;
  equals(input: Delegated): boolean;
}
const directIs = (input: unknown): input is FunctionUnion =>
  typia.is<FunctionUnion>(input);
const factoryIs = typia.createIs<FunctionUnion>();
const directEquals = (x: unknown, y: unknown): boolean =>
  typia.compare.equals<FunctionUnion>(x as FunctionUnion, y as FunctionUnion);
const factoryEquals = typia.compare.createEquals<FunctionUnion>();
const directCover = (x: FunctionUnion, y: unknown): boolean =>
  typia.compare.cover<FunctionUnion>(
    x,
    y as typia.compare.Cover<FunctionUnion>,
  );
const factoryCover = typia.compare.createCover<FunctionUnion>();
const directClone = (input: FunctionUnion) =>
  typia.plain.clone<FunctionUnion>(input);
const factoryClone = typia.plain.createClone<FunctionUnion>();
const prune = typia.plain.createPrune<FunctionUnion>();
const reversedEquals = typia.compare.createEquals<StringFirstUnion>();
const functionSecondDirectIs = (input: unknown): input is FunctionSecondUnion =>
  typia.is<FunctionSecondUnion>(input);
const functionSecondFactoryIs = typia.createIs<FunctionSecondUnion>();
const functionSecondDirectEquals = (
  x: FunctionSecondUnion,
  y: FunctionSecondUnion,
): boolean => typia.compare.equals<FunctionSecondUnion>(x, y);
const functionSecondFactoryEquals =
  typia.compare.createEquals<FunctionSecondUnion>();
const functionSecondDirectCover = (
  x: FunctionSecondUnion,
  y: unknown,
): boolean =>
  typia.compare.cover<FunctionSecondUnion>(
    x,
    y as typia.compare.Cover<FunctionSecondUnion>,
  );
const functionSecondFactoryCover =
  typia.compare.createCover<FunctionSecondUnion>();
const coverPartialDirect = (x: CoverPartial, y: unknown): boolean =>
  typia.compare.cover<CoverPartial>(x, y as typia.compare.Cover<CoverPartial>);
const coverPartialFactory = typia.compare.createCover<CoverPartial>();
const functionSecondNestedDirectEquals = (
  x: FunctionSecondNested,
  y: FunctionSecondNested,
): boolean => typia.compare.equals<FunctionSecondNested>(x, y);
const functionSecondNestedFactoryEquals =
  typia.compare.createEquals<FunctionSecondNested>();
const delegatedDirectEquals = (x: Delegated, y: Delegated): boolean =>
  typia.compare.equals<Delegated>(x, y);
const delegatedFactoryEquals = typia.compare.createEquals<Delegated>();
const nestedEquals = typia.compare.createEquals<Nested>();
const nestedDirectEquals = (x: Nested, y: Nested): boolean =>
  typia.compare.equals<Nested>(x, y);
/**
 * Verifies functional union routing preserves selected-arm payloads.
 *
 * Runs the real native callbacks so correct emitted text cannot hide a runtime
 * routing, receiver, copy or comparison defect.
 *
 * 1. Produce the same typed public callbacks as the original regression.
 * 2. Execute its authored inputs and independent result assertions.
 * 3. Propagate every failed comparison to the shared suite runner.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct/factory validators, comparators, covers, clones, pruning, reversed/nested arms, same-invalid-reference identity, actual function members, omitted/undefined cover fields and delegated equals retain literal expected results.
 * @evidence contracts/testing.md#independent-expectations Functional membership requires a function-valued handler when selecting its arm, while comparison ignores function identity after selection and default mode retains lenient function members. Boolean decisions and clone/prune payload literals encode that option contract independently of callback output; payload expectations never read the potentially mutated callback input.
 * @evidence contracts/testing.md#distinguishing-cases Direct/factory validators, comparators, covers, clones, pruning, reversed/nested arms, same-invalid-reference identity, actual function members, omitted/undefined cover fields and delegated equals retain literal expected results. Each invocation checks one actual transform option. The ordinary suite invokes functional mode; the separate default-option batch must invoke default mode against a project transformed with functional disabled. Both option executions are required to establish preserved coverage.
 * @evidence contracts/testing.md#execution-ownership The matching exported composite is discovered by TestServant in test-typia-automated. Private typed producers and deliberately unchecked JavaScript-style runtime inputs preserve the original test boundary.
 * @evidence contracts/e2e.md#necessary-boundary Real typia public calls are transformed and their callbacks execute in Node. Go unit assertions on metadata or emitted text cannot detect a runtime result, receiver or mutation defect.
 * @evidence contracts/e2e.md#shared-execution This case reuses the suite's generated project and shared worker with other native composites; it starts no compiler project, subprocess or artifact installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation constructs its own sample inputs and observations. Cases that mutate arrays, objects or recursive graphs retain those values within that invocation, and do not cache verdicts. The suite owns and closes the worker.
 * @evidence contracts/e2e.md#preserved-coverage The original typed fixture, public call forms and runtime input/assertion population are retained here. Each invocation checks one actual transform option. The ordinary suite invokes functional mode; the separate default-option batch must invoke default mode against a project transformed with functional disabled. Both option executions are required to establish preserved coverage. Execution is verified by the canonical suite run, not this comment.
 */
export const test_native_compare_functional_union_membership = (
  mode: "default" | "functional" = "functional",
): void => {
  const mod: Record<string, any> = {
    directIs,
    factoryIs,
    directEquals,
    factoryEquals,
    directCover,
    factoryCover,
    directClone,
    factoryClone,
    prune,
    reversedEquals,
    functionSecondDirectIs,
    functionSecondFactoryIs,
    functionSecondDirectEquals,
    functionSecondFactoryEquals,
    functionSecondDirectCover,
    functionSecondFactoryCover,
    coverPartialDirect,
    coverPartialFactory,
    functionSecondNestedDirectEquals,
    functionSecondNestedFactoryEquals,
    delegatedDirectEquals,
    delegatedFactoryEquals,
    nestedEquals,
    nestedDirectEquals,
  };
  const functional = mod;
  const defaults = mod;
  let ran = 0;
  const failures: string[] = [];
  const expect = (name: string, actual: unknown, expected: unknown) => {
    ran += 1;
    if (actual !== expected)
      failures.push(name + ": expected " + expected + ", got " + actual);
  };
  const expectJson = (name: string, actual: unknown, expected: unknown) =>
    expect(name, JSON.stringify(actual), JSON.stringify(expected));
  const left: any = { handler: "text", common: "same", label: "left" };
  const right: any = { handler: "text", common: "same", label: "right" };
  const equal: any = { handler: "text", common: "same", label: "left" };
  const invalidLeft: any = { handler: 1, common: "same", label: "left" };
  const invalidRight: any = { handler: 1, common: "same", label: "right" };
  // Functional mode must use handler while routing, then preserve equality's
  // established post-selection treatment of actual function-valued properties.
  if (mode === "functional")
    expect(
      "functional direct is accepts later member",
      functional.directIs(left),
      true,
    );
  if (mode === "functional")
    expect(
      "functional factory is accepts later member",
      functional.factoryIs(right),
      true,
    );
  if (mode === "functional")
    expect(
      "functional direct equals distinguishes later label",
      functional.directEquals(left, right),
      false,
    );
  if (mode === "functional")
    expect(
      "functional factory equals distinguishes later label",
      functional.factoryEquals(left, right),
      false,
    );
  if (mode === "functional")
    expect(
      "functional direct equals keeps equal later member",
      functional.directEquals(left, equal),
      true,
    );
  if (mode === "functional")
    expect(
      "functional factory equals keeps equal later member",
      functional.factoryEquals(left, equal),
      true,
    );
  if (mode === "functional")
    expect(
      "functional direct cover distinguishes later label",
      functional.directCover(left, right),
      false,
    );
  if (mode === "functional")
    expect(
      "functional factory cover distinguishes later label",
      functional.factoryCover(left, right),
      false,
    );
  if (mode === "functional")
    expectJson(
      "functional direct clone preserves later member",
      functional.directClone(left),
      { handler: "text", common: "same", label: "left" },
    );
  if (mode === "functional")
    expectJson(
      "functional factory clone preserves later member",
      functional.factoryClone(right),
      { handler: "text", common: "same", label: "right" },
    );
  const pruned: any = { ...left, extra: true };
  if (mode === "functional") functional.prune(pruned);
  if (mode === "functional")
    expectJson("functional prune retains selected later label", pruned, {
      handler: "text",
      common: "same",
      label: "left",
    });
  if (mode === "functional")
    expect(
      "functional reversed union distinguishes later label",
      functional.reversedEquals(left, right),
      false,
    );
  if (mode === "functional")
    expect(
      "functional nested factory distinguishes later label",
      functional.nestedEquals({ value: left }, { value: right }),
      false,
    );
  if (mode === "functional")
    expect(
      "functional nested direct distinguishes later label",
      functional.nestedDirectEquals({ value: left }, { value: right }),
      false,
    );
  if (mode === "functional")
    expect(
      "functional direct is rejects invalid handler",
      functional.directIs(invalidLeft),
      false,
    );
  if (mode === "functional")
    expect(
      "functional factory is rejects invalid handler",
      functional.factoryIs(invalidRight),
      false,
    );
  if (mode === "functional")
    expect(
      "functional direct equals rejects distinct invalid operands",
      functional.directEquals(invalidLeft, invalidRight),
      false,
    );
  if (mode === "functional")
    expect(
      "functional factory equals rejects distinct invalid operands",
      functional.factoryEquals(invalidLeft, invalidRight),
      false,
    );
  if (mode === "functional")
    expect(
      "functional same invalid reference keeps identity fast path",
      functional.factoryEquals(invalidLeft, invalidLeft),
      true,
    );
  const functionLeft: any = {
    handler: (value: any) => String(value),
    common: "same",
  };
  const functionRight: any = {
    handler: (value: any) => "#" + value,
    common: "same",
  };
  const functionDifferentCommon: any = {
    handler: (value: any) => String(value),
    common: "different",
  };
  if (mode === "functional")
    expect(
      "functional actual functions keep method identity ignored",
      functional.factoryEquals(functionLeft, functionRight),
      true,
    );
  if (mode === "functional")
    expect(
      "functional actual function member still compares data",
      functional.factoryEquals(functionLeft, functionDifferentCommon),
      false,
    );
  // This is the order-symmetric public-behavior control. The function arm follows
  // the strict string arm and alone owns label. The string matcher must reject an
  // actual function before the later arm is selected, then equality compares label.
  const functionSecondHandler = (value: any) => String(value);
  const functionSecondLeft: any = {
    common: "same",
    handler: functionSecondHandler,
    label: "left",
  };
  const functionSecondRight: any = {
    common: "same",
    handler: functionSecondHandler,
    label: "right",
  };
  const functionSecondEqual: any = {
    common: "same",
    handler: (value: any) => "!" + value,
    label: "left",
  };
  const functionSecondString: any = { handler: "text", common: "same" };
  const functionSecondExtra: any = { ...functionSecondLeft, extra: "ignored" };
  const functionSecondInvalidLeft: any = {
    common: "same",
    handler: 1,
    label: "same",
  };
  const functionSecondInvalidRight: any = {
    common: "same",
    handler: 1,
    label: "same",
  };
  const coverPartialFull: any = { common: "same", label: "left" };
  const coverPartialOmitted: any = { common: "same" };
  const coverPartialUndefined: any = { common: "same", label: undefined };
  if (mode === "functional")
    expect(
      "functional second function arm direct is accepts",
      functional.functionSecondDirectIs(functionSecondLeft),
      true,
    );
  if (mode === "functional")
    expect(
      "functional second function arm factory is accepts",
      functional.functionSecondFactoryIs(functionSecondRight),
      true,
    );
  if (mode === "functional")
    expect(
      "functional second function arm direct is rejects invalid handler",
      functional.functionSecondDirectIs(functionSecondInvalidLeft),
      false,
    );
  if (mode === "functional")
    expect(
      "functional second function arm factory is rejects invalid handler",
      functional.functionSecondFactoryIs(functionSecondInvalidRight),
      false,
    );
  if (mode === "functional")
    expect(
      "functional second function arm direct equals compares label",
      functional.functionSecondDirectEquals(
        functionSecondLeft,
        functionSecondRight,
      ),
      false,
    );
  if (mode === "functional")
    expect(
      "functional second function arm factory equals compares label",
      functional.functionSecondFactoryEquals(
        functionSecondLeft,
        functionSecondRight,
      ),
      false,
    );
  if (mode === "functional")
    expect(
      "functional second function arm direct equals rejects invalid equal-label handlers",
      functional.functionSecondDirectEquals(
        functionSecondInvalidLeft,
        functionSecondInvalidRight,
      ),
      false,
    );
  if (mode === "functional")
    expect(
      "functional second function arm factory equals rejects invalid equal-label handlers",
      functional.functionSecondFactoryEquals(
        functionSecondInvalidLeft,
        functionSecondInvalidRight,
      ),
      false,
    );
  if (mode === "functional")
    expect(
      "functional second function arm direct cover compares label",
      functional.functionSecondDirectCover(
        functionSecondLeft,
        functionSecondRight,
      ),
      false,
    );
  if (mode === "functional")
    expect(
      "functional second function arm factory cover compares label",
      functional.functionSecondFactoryCover(
        functionSecondLeft,
        functionSecondRight,
      ),
      false,
    );
  if (mode === "functional")
    expect(
      "functional second function arm nested direct equals compares label",
      functional.functionSecondNestedDirectEquals(
        { value: functionSecondLeft },
        { value: functionSecondRight },
      ),
      false,
    );
  if (mode === "functional")
    expect(
      "functional second function arm nested factory equals compares label",
      functional.functionSecondNestedFactoryEquals(
        { value: functionSecondLeft },
        { value: functionSecondRight },
      ),
      false,
    );
  if (mode === "functional")
    expect(
      "functional second function arm direct equals keeps equal label",
      functional.functionSecondDirectEquals(
        functionSecondLeft,
        functionSecondEqual,
      ),
      true,
    );
  if (mode === "functional")
    expect(
      "functional second function arm factory equals keeps equal label",
      functional.functionSecondFactoryEquals(
        functionSecondLeft,
        functionSecondEqual,
      ),
      true,
    );
  if (mode === "functional")
    expect(
      "functional function-first direct cross-member equals rejects",
      functional.directEquals(functionLeft, left),
      false,
    );
  if (mode === "functional")
    expect(
      "functional function-first factory cross-member equals rejects",
      functional.factoryEquals(functionLeft, left),
      false,
    );
  if (mode === "functional")
    expect(
      "functional function-second direct cross-member equals rejects",
      functional.functionSecondDirectEquals(
        functionSecondLeft,
        functionSecondString,
      ),
      false,
    );
  if (mode === "functional")
    expect(
      "functional function-second factory cross-member equals rejects",
      functional.functionSecondFactoryEquals(
        functionSecondLeft,
        functionSecondString,
      ),
      false,
    );
  if (mode === "functional")
    expect(
      "functional direct cover accepts omitted right property",
      functional.coverPartialDirect(coverPartialFull, coverPartialOmitted),
      true,
    );
  if (mode === "functional")
    expect(
      "functional factory cover accepts omitted right property",
      functional.coverPartialFactory(coverPartialFull, coverPartialOmitted),
      true,
    );
  if (mode === "functional")
    expect(
      "functional direct cover accepts undefined right property",
      functional.coverPartialDirect(coverPartialFull, coverPartialUndefined),
      true,
    );
  if (mode === "functional")
    expect(
      "functional factory cover accepts undefined right property",
      functional.coverPartialFactory(coverPartialFull, coverPartialUndefined),
      true,
    );
  if (mode === "functional")
    expect(
      "functional second function arm direct equals ignores extra key",
      functional.functionSecondDirectEquals(
        functionSecondLeft,
        functionSecondExtra,
      ),
      true,
    );
  if (mode === "functional")
    expect(
      "functional second function arm factory equals ignores extra key",
      functional.functionSecondFactoryEquals(
        functionSecondLeft,
        functionSecondExtra,
      ),
      true,
    );
  const delegatedLeft: any = { value: "left", equals: () => true };
  const delegatedRight: any = { value: "right", equals: () => true };
  if (mode === "functional")
    expect(
      "functional direct equals delegates declared method",
      functional.delegatedDirectEquals(delegatedLeft, delegatedRight),
      true,
    );
  if (mode === "functional")
    expect(
      "functional factory equals delegates declared method",
      functional.delegatedFactoryEquals(delegatedLeft, delegatedRight),
      true,
    );
  // Default mode deliberately treats a sole function-valued member as lenient.
  // The option boundary must stay visible rather than changing compare globally.
  if (mode === "default")
    expect(
      "default direct is keeps function member lenient",
      defaults.directIs(invalidLeft),
      true,
    );
  if (mode === "default")
    expect(
      "default factory is keeps function member lenient",
      defaults.factoryIs(invalidRight),
      true,
    );
  if (mode === "default")
    expect(
      "default equals keeps function member ignored",
      defaults.factoryEquals(invalidLeft, invalidRight),
      true,
    );
  if (mode === "default")
    expect(
      "default second function arm direct equals retains later label",
      defaults.functionSecondDirectEquals(
        functionSecondLeft,
        functionSecondRight,
      ),
      false,
    );
  if (mode === "default")
    expect(
      "default second function arm factory equals retains later label",
      defaults.functionSecondFactoryEquals(
        functionSecondLeft,
        functionSecondRight,
      ),
      false,
    );
  if (failures.length !== 0) throw new Error(failures.join("\n"));
  if (ran !== (mode === "functional" ? 47 : 5))
    throw new Error("functional union matrix observation count: " + ran);
};
