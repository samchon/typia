import { TestStructure } from "@typia/template";
import { prepareClone } from "@typia/template/clone";
import typia from "typia";

/**
 * Verifies typia.plain.validateClone clean copying and authored invalid inputs.
 *
 * Portable preparation owns clone content, source preservation and graph
 * separation. This wrapper retains the actual emitted producer and its
 * invalid-input result/error connection.
 *
 * 1. Capture the valid fixture and authored projection before cloning.
 * 2. Check the actual copied result through the portable clone owner.
 * 3. Apply each authored spoiler and check its operation-specific failure.
 *
 * @evidence contracts/common.md#principled-implementation prepareClone establishes a pre-call projection and source graph independently of the actual result. The clean report is checked through the actual emitted IValidation success-shape assertion before its data is judged. Spoiled reports must fail the success branch, satisfy the emitted report shape and match the authored complete sorted error-path multiset.
 * @evidence contracts/common.md#clear-and-simple-design One clean scenario delegates shared graph semantics; the existing spoiler loop retains its operation-specific diagnostics without duplicating clone traversal.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The supplied callback and authored spoilers execute directly. Portable source/value/reference checks replace transport omission equivalence without fixture-name or callback-text exceptions.
 * @evidence contracts/common.md#meaningful-documentation Native prose separates clean clone ownership from producer-specific invalid-input checks and states the preserved scenario sequence. The shared check documents its ordinary-data fixture premise.
 * @evidence contracts/testing.md#behavioral-verification The actual callback must return faithful independently owned data without mutating the clean input. The clean report is checked through the actual emitted IValidation success-shape assertion before its data is judged. Spoiled reports must fail the success branch, satisfy the emitted report shape and match the authored complete sorted error-path multiset.
 * @evidence contracts/testing.md#independent-expectations The authored fixture and optional RESOLVE precede cloning; prepareClone snapshots that projection and original references. Spoiler-authored invalid values and paths determine failed-input expectations independently of native output.
 * @evidence contracts/testing.md#distinguishing-cases The calling native case supplies its declared clean shape and each existing spoiler. Portable units reject identity, shallow, lossy and source-mutating copies with primitive, empty, shared/cyclic and class-projection controls; this wrapper retains its own failed-input distinctions.
 * @evidence contracts/testing.md#execution-ownership The committed ObjectSimple composite calls this wrapper through TestServant discovery. Portable clone comparisons execute independently under plugin-free units; the wrapper retains the actual producer and diagnostic connection.
 * @evidence contracts/e2e.md#necessary-boundary The real Go-produced typia.plain.validateClone callback and existing emitted diagnostic assertions must agree with the TypeScript declaration. A handwritten callback can exercise graph-check semantics but cannot prove that assembly or error/result binding.
 * @evidence contracts/e2e.md#shared-execution The calling family/composite batch shares the single suite worker and fully generated project with every other family, reusing the workspace content-keyed native artifact without per-case host preparation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The clean and each spoiled value are generated separately; snapshots and results remain local. The caller closes its connected worker in finally, and ttsc owns artifact identity/invalidation rather than this helper.
 * @evidence contracts/e2e.md#preserved-coverage Only clean copy comparison delegates to the portable owner and gains pre-call/source/reference distinctions. Existing callback construction, fixture/spoiler inputs, invalid result/error/path assertions and discoverable native exports remain executed.
 */
export const _test_plain_validateClone =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (clone: (input: T) => typia.IValidation<typia.Resolved<T>>): void => {
    const input: T = factory.generate();
    const check = prepareClone(
      input,
      factory.RESOLVE ? factory.RESOLVE(input) : input,
      `Bug on typia.plain.validateClone(): failed to understand the ${name} type.`,
    );
    const valid: typia.IValidation<typia.Resolved<T>> = clone(input);
    if (valid.success === false)
      throw new Error(
        `Bug on typia.plain.validateClone(): failed to understand the ${name} type.`,
      );

    typia.assertEquals<typia.IValidation.ISuccess<unknown>>(valid);
    check(valid.data);

    const wrong: ISpoiled[] = [];
    for (const spoil of factory.SPOILERS || []) {
      const elem: T = factory.generate();
      const expected: string[] = spoil(elem);
      const valid: typia.IValidation<typia.Resolved<T>> = clone(elem);

      if (valid.success === true)
        throw new Error(
          `Bug on typia.plain.validateClone(): failed to detect error on the ${name} type.`,
        );

      typia.assertEquals(valid);
      expected.sort();
      valid.errors.sort((x, y) => (x.path < y.path ? -1 : 1));

      if (
        valid.errors.length !== expected.length ||
        valid.errors.every((e, i) => e.path === expected[i]) === false
      )
        wrong.push({
          expected,
          actual: valid.errors.map((e) => e.path),
        });
    }
    if (wrong.length !== 0)
      throw new Error(
        `Bug on typia.plain.validateClone(): failed to detect error on the ${name} type.`,
      );
  };

interface ISpoiled {
  expected: string[];
  actual: string[];
}
