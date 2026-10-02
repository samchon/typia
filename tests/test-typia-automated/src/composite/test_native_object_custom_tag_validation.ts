import typia from "typia";
import type { tags } from "typia";

type MinEntries<Value extends number> = tags.TagBase<{
  target: "object";
  kind: "minEntries";
  value: Value;
  validate: `Object.keys($input).length >= ${Value}`;
  exclusive: true;
}>;

type MaxEntries<Value extends number> = tags.TagBase<{
  target: "object";
  kind: "maxEntries";
  value: Value;
  validate: `Object.keys($input).length <= ${Value}`;
  exclusive: true;
}>;

type CountedMinEntries<Value extends number> = tags.TagBase<{
  target: "object";
  kind: "countedMinEntries";
  value: Value;
  validate: `((globalThis.__objectTagCount = (globalThis.__objectTagCount ?? 0) + 1), Object.keys($input).length >= ${Value})`;
  exclusive: true;
}>;

type Filters = Partial<{
  user_id: number;
  topic_id: number;
  post_id: number;
}> &
  MinEntries<1>;

type BoundedFilters = Partial<{
  user_id: number;
  topic_id: number;
  post_id: number;
}> &
  MinEntries<1> &
  MaxEntries<2>;

type TaggedUnion =
  | ({
      type: "a";
      value?: number;
    } & MinEntries<2>)
  | {
      type: "b";
    };

type CountedUnion =
  | ({
      type: "counted";
      value: number;
    } & CountedMinEntries<2>)
  | {
      type: "plain";
    };

const isFilters = typia.createIs<Filters>();
const validateFilters = typia.createValidate<Filters>();
const equalsFilters = typia.createEquals<Filters>();
const validateEqualsFilters = typia.createValidateEquals<Filters>();
const isBoundedFilters = typia.createIs<BoundedFilters>();
const validateBoundedFilters = typia.createValidate<BoundedFilters>();
const isTaggedUnion = typia.createIs<TaggedUnion>();
const validateTaggedUnion = typia.createValidate<TaggedUnion>();
const assertTaggedUnion = typia.createAssert<TaggedUnion>();
const isCountedUnion = typia.createIs<CountedUnion>();
const validateCountedUnion = typia.createValidate<CountedUnion>();
const assertCountedUnion = typia.createAssert<CountedUnion>();

type Container = {
  union: TaggedUnion;
  other: string;
};

const validateContainer = typia.createValidate<Container>();
const assertContainer = typia.createAssert<Container>();

const capture = (
  task: () => void,
): null | { path?: string; expected?: string } => {
  try {
    task();
    return null;
  } catch (error) {
    return error as { path?: string; expected?: string };
  }
};

const withTagCount = (task: () => unknown) => {
  (globalThis as any).__objectTagCount = 0;
  const value = task();
  return { value, count: (globalThis as any).__objectTagCount ?? 0 };
};

const run = () => ({
  emptyIs: isFilters({}),
  validIs: isFilters({ user_id: 1 }),
  emptyValidate: validateFilters({}).success,
  validValidate: validateFilters({ user_id: 1 }).success,
  emptyEquals: equalsFilters({}),
  validEquals: equalsFilters({ user_id: 1 }),
  emptyValidateEquals: validateEqualsFilters({}).success,
  validValidateEquals: validateEqualsFilters({ user_id: 1 }).success,
  directEmptyEquals: typia.equals<Filters>({}),
  directValidEquals: typia.equals<Filters>({ user_id: 1 }),
  directEmptyValidateEquals: typia.validateEquals<Filters>({}).success,
  directValidValidateEquals: typia.validateEquals<Filters>({
    user_id: 1,
  }).success,
  boundedEmptyIs: isBoundedFilters({}),
  boundedSingleIs: isBoundedFilters({ user_id: 1 }),
  boundedTooManyIs: isBoundedFilters({
    user_id: 1,
    topic_id: 2,
    post_id: 3,
  }),
  boundedEmptyValidate: validateBoundedFilters({}).success,
  boundedSingleValidate: validateBoundedFilters({ user_id: 1 }).success,
  boundedTooManyValidate: validateBoundedFilters({
    user_id: 1,
    topic_id: 2,
    post_id: 3,
  }).success,
  unionInvalidAIs: isTaggedUnion({ type: "a" }),
  unionValidAIs: isTaggedUnion({ type: "a", value: 1 }),
  unionValidBIs: isTaggedUnion({ type: "b" }),
  unionInvalidAValidate: validateTaggedUnion({ type: "a" }),
  unionInvalidAAssert: capture(() => assertTaggedUnion({ type: "a" })),
  unionValidAValidate: validateTaggedUnion({ type: "a", value: 1 }).success,
  unionValidBValidate: validateTaggedUnion({ type: "b" }).success,
  unionValidBAssert: capture(() => assertTaggedUnion({ type: "b" })),
  countedUnionValid: withTagCount(() =>
    isCountedUnion({ type: "counted", value: 1 }),
  ),
  countedUnionValidValidate: withTagCount(
    () => validateCountedUnion({ type: "counted", value: 1 }).success,
  ),
  countedUnionValidAssert: withTagCount(() =>
    capture(() => assertCountedUnion({ type: "counted", value: 1 })),
  ),
  countedUnionPlain: withTagCount(() => isCountedUnion({ type: "plain" })),
  containerValidBAssert: capture(() =>
    assertContainer({ union: { type: "b" }, other: "ok" }),
  ),
  containerInvalidOtherAssert: capture(() =>
    assertContainer({ union: { type: "b" }, other: 1 as any }),
  ),
  containerInvalidOtherValidate: validateContainer({
    union: { type: "b" },
    other: 1 as any,
  }),
});
const fixture = { run };

/**
 * Verifies object custom tag validation in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * objectCustomTagValidationSource declarations; the former
 * objectCustomTagValidationRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: the literal runtime assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from objectCustomTagValidationRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The authored TagBase predicates determine entry-count acceptance independently of ordinary members. Invocation counts must be one for tagged branches and zero for the untagged control; failed reports pin root/other paths and absence of a spurious union path. Tag names and complete diagnostic records are not inspected.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_object_custom_tag_validation in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed objectCustomTagValidationSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the fixture-owned custom-tag counter is restored after its case, and the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/object_custom_tag_validation_transform_test.go objectCustomTagValidationRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_object_custom_tag_validation = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const originalCounter = Object.getOwnPropertyDescriptor(
    globalThis,
    "__objectTagCount",
  );
  try {
    const result: any = mod.run();

    if (result.emptyIs !== false)
      throw new Error("empty object passed createIs");
    if (result.validIs !== true)
      throw new Error("non-empty object failed createIs");
    if (result.emptyValidate !== false)
      throw new Error("empty object passed createValidate");
    if (result.validValidate !== true)
      throw new Error("non-empty object failed createValidate");
    if (result.emptyEquals !== false)
      throw new Error("empty object passed createEquals");
    if (result.validEquals !== true)
      throw new Error("non-empty object failed createEquals");
    if (result.emptyValidateEquals !== false)
      throw new Error("empty object passed createValidateEquals");
    if (result.validValidateEquals !== true)
      throw new Error("non-empty object failed createValidateEquals");
    if (result.directEmptyEquals !== false)
      throw new Error("empty object passed direct equals");
    if (result.directValidEquals !== true)
      throw new Error("non-empty object failed direct equals");
    if (result.directEmptyValidateEquals !== false)
      throw new Error("empty object passed direct validateEquals");
    if (result.directValidValidateEquals !== true)
      throw new Error("non-empty object failed direct validateEquals");
    if (result.boundedEmptyIs !== false)
      throw new Error("empty object passed bounded createIs");
    if (result.boundedSingleIs !== true)
      throw new Error("single-entry object failed bounded createIs");
    if (result.boundedTooManyIs !== false)
      throw new Error("too-large object passed bounded createIs");
    if (result.boundedEmptyValidate !== false)
      throw new Error("empty object passed bounded createValidate");
    if (result.boundedSingleValidate !== true)
      throw new Error("single-entry object failed bounded createValidate");
    if (result.boundedTooManyValidate !== false)
      throw new Error("too-large object passed bounded createValidate");
    if (result.unionInvalidAIs !== false)
      throw new Error(
        "tagged union branch passed createIs without enough entries",
      );
    if (result.unionValidAIs !== true)
      throw new Error(
        "tagged union branch failed createIs with enough entries",
      );
    if (result.unionValidBIs !== true)
      throw new Error("untagged union branch failed createIs");
    if (result.unionInvalidAValidate.success !== false)
      throw new Error(
        "tagged union branch passed createValidate without enough entries",
      );
    if (
      !result.unionInvalidAValidate.errors.some(
        (error: any): any => error.path === "$input",
      )
    ) {
      throw new Error(
        "tagged union custom tag failure did not report the union path: " +
          JSON.stringify(result.unionInvalidAValidate.errors),
      );
    }
    if (
      !result.unionInvalidAAssert ||
      result.unionInvalidAAssert.path !== "$input"
    ) {
      throw new Error(
        "tagged union custom tag assert reported the wrong path: " +
          JSON.stringify(result.unionInvalidAAssert),
      );
    }
    if (result.unionValidAValidate !== true)
      throw new Error(
        "tagged union branch failed createValidate with enough entries",
      );
    if (result.unionValidBValidate !== true)
      throw new Error("untagged union branch failed createValidate");
    if (result.unionValidBAssert !== null)
      throw new Error("untagged union branch failed createAssert");
    if (
      result.countedUnionValid.value !== true ||
      result.countedUnionValid.count !== 1
    ) {
      throw new Error(
        "selected tagged union branch executed its object tag more than once: " +
          JSON.stringify(result.countedUnionValid),
      );
    }
    if (
      result.countedUnionValidValidate.value !== true ||
      result.countedUnionValidValidate.count !== 1
    ) {
      throw new Error(
        "selected validate union branch executed its object tag more than once: " +
          JSON.stringify(result.countedUnionValidValidate),
      );
    }
    if (
      result.countedUnionValidAssert.value !== null ||
      result.countedUnionValidAssert.count !== 1
    ) {
      throw new Error(
        "selected assert union branch executed its object tag more than once: " +
          JSON.stringify(result.countedUnionValidAssert),
      );
    }
    if (
      result.countedUnionPlain.value !== true ||
      result.countedUnionPlain.count !== 0
    ) {
      throw new Error(
        "untagged union branch executed an unrelated object tag: " +
          JSON.stringify(result.countedUnionPlain),
      );
    }
    if (result.containerValidBAssert !== null)
      throw new Error("nested untagged union branch failed createAssert");
    if (
      !result.containerInvalidOtherAssert ||
      result.containerInvalidOtherAssert.path !== "$input.other"
    ) {
      throw new Error(
        "nested union slow-path assert reported the wrong path: " +
          JSON.stringify(result.containerInvalidOtherAssert),
      );
    }
    if (result.containerInvalidOtherValidate.success !== false) {
      throw new Error(
        "container with invalid other property passed createValidate",
      );
    }
    const paths: any = result.containerInvalidOtherValidate.errors.map(
      (error: any): any => error.path,
    );
    if (paths.includes("$input.union")) {
      throw new Error(
        "nested valid union emitted a spurious validation error: " +
          JSON.stringify(result.containerInvalidOtherValidate.errors),
      );
    }
    if (!paths.includes("$input.other")) {
      throw new Error(
        "container validation did not report the invalid other property: " +
          JSON.stringify(result.containerInvalidOtherValidate.errors),
      );
    }
  } finally {
    if (originalCounter)
      Object.defineProperty(globalThis, "__objectTagCount", originalCounter);
    else delete (globalThis as any).__objectTagCount;
  }
};
