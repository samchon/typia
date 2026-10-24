import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

/**
 * Verifies generated checkers apply recursive array tags at every use.
 *
 * Recursive helpers share structural traversal by array type. Constraints
 * belong to each use and must still run when another use has visited the same
 * value.
 *
 * 1. Build direct and factory predicates, assertions and validation operations.
 * 2. Check tagged siblings, alternative bounds and self-tagged recursive edges.
 * 3. Reuse one array across properties to detect constraints bypassing visit
 *    guards.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct and factory checker families distinguish allowed empty/single/nested arrays from wrong lengths and wrong leaves; assert failures and validation success flags are observed.
 * @evidence contracts/testing.md#independent-expectations Authored MaxItems and MinItems intersections define the allowed lengths. Adjacent length-two arrays violate the alternative maximum-one/minimum-three bound, and recursive tagged children must be nonempty at every depth.
 * @evidence contracts/testing.md#distinguishing-cases Covers tagged versus untagged siblings, direct versus factory and equals variants, zero/one/two/three lengths, invalid nested leaves, a shared array instance and self-tagged recursion.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_validate_recursive_array_tags in the existing schema suite; root pnpm test executes the transformed operations and the local result matrix.
 * @evidence contracts/e2e.md#necessary-boundary Exercises actual TypeScript alias/intersection analysis and emitted checker helpers together; a handwritten schema or metadata writer cannot detect runtime helper calls dropping use-site conditions.
 * @evidence contracts/e2e.md#shared-execution All operations are transformed in the existing ttsx project with its shared native plugin and no per-operation compiler launches.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Generated validators and payloads belong to this invocation. Shared array identity is intentional within individual cases; no input or result is mutated across cases. ttsx owns host lifetime and artifact invalidation.
 * @evidence contracts/e2e.md#preserved-coverage Adds recursive tag call-site coverage across all shared checker families without removing existing ordinary array tests; schema producer assertions remain separately discoverable.
 */
export const test_validate_recursive_array_tags = (): void => {
  type Tree = (string | Tree)[];
  interface Input {
    small: Tree & tags.MaxItems<1>;
    many: Tree & tags.MinItems<2>;
    plain: Tree;
  }
  type Alternative = Tree & (tags.MaxItems<1> | tags.MinItems<3>);
  type TaggedTree = (string | (TaggedTree & tags.MinItems<1>))[];
  const is = typia.createIs<Input>();
  const equals = typia.createEquals<Input>();
  const assert = typia.createAssert<Input>();
  const assertEquals = typia.createAssertEquals<Input>();
  const assertGuard: (input: unknown) => asserts input is Input =
    typia.createAssertGuard<Input>();
  const assertGuardEquals: (input: unknown) => asserts input is Input =
    typia.createAssertGuardEquals<Input>();
  const validate = typia.createValidate<Input>();
  const validateEquals = typia.createValidateEquals<Input>();
  const shared = ["a", "b"];
  const cases: [unknown, boolean][] = [
    [{ small: [], many: ["a", "b"], plain: [] }, true],
    [{ small: [["a", "b"]], many: [[], []], plain: ["a", "b", "c"] }, true],
    [{ small: ["a", "b"], many: ["a", "b"], plain: [] }, false],
    [{ small: [], many: ["a"], plain: [] }, false],
    [{ small: [], many: ["a", [1]], plain: [] }, false],
    [{ small: shared, many: shared, plain: shared }, false],
  ];
  const observations: {
    sample: number;
    operation: string;
    accepted: boolean;
  }[] = [];
  const expectations: typeof observations = [];
  cases.forEach(([value, accepted], sample) => {
    const operations: Record<string, () => boolean> = {
      is: () => typia.is<Input>(value),
      equals: () => typia.equals<Input>(value),
      assert: () =>
        TestEquality.thrown(() => typia.assert<Input>(value)) === null,
      assertEquals: () =>
        TestEquality.thrown(() => typia.assertEquals<Input>(value)) === null,
      assertGuard: () =>
        TestEquality.thrown(() => typia.assertGuard<Input>(value)) === null,
      assertGuardEquals: () =>
        TestEquality.thrown(() => typia.assertGuardEquals<Input>(value)) ===
        null,
      validate: () => typia.validate<Input>(value).success,
      validateEquals: () => typia.validateEquals<Input>(value).success,
      factoryIs: () => is(value),
      factoryEquals: () => equals(value),
      factoryAssert: () => TestEquality.thrown(() => assert(value)) === null,
      factoryAssertEquals: () =>
        TestEquality.thrown(() => assertEquals(value)) === null,
      factoryAssertGuard: () =>
        TestEquality.thrown(() => assertGuard(value)) === null,
      factoryAssertGuardEquals: () =>
        TestEquality.thrown(() => assertGuardEquals(value)) === null,
      factoryValidate: () => validate(value).success,
      factoryValidateEquals: () => validateEquals(value).success,
    };
    for (const [operation, run] of Object.entries(operations)) {
      observations.push({ sample, operation, accepted: run() });
      expectations.push({ sample, operation, accepted });
    }
  });
  TestEquality.equals("recursive checker matrix", observations, expectations);
  const alternatives = [[], ["a"], ["a", "b"], ["a", "b", "c"]];
  TestEquality.equals(
    "alternative bounds",
    alternatives.map((value) => typia.is<Alternative>(value)),
    [true, true, false, true],
  );
  TestEquality.equals(
    "recursive tagged children",
    [[], ["a"], [["a"]], [[]], [["a", []]], [[1]]].map((value) =>
      typia.is<TaggedTree>(value),
    ),
    [true, true, true, false, false, false],
  );
};
