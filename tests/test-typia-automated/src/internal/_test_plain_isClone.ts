import { prepareClone } from "@typia/oracle/clone";
import { TestStructure } from "@typia/template";
import { Resolved } from "typia";

/**
 * Verifies typia.plain.isClone clean copying and authored invalid inputs.
 *
 * Portable preparation owns clone content, source preservation and graph
 * separation. This wrapper retains the actual emitted producer and its
 * invalid-input result/error connection.
 *
 * 1. Capture the valid fixture and authored projection before cloning.
 * 2. Check the actual copied result through the portable clone owner.
 * 3. Apply each authored spoiler and check its operation-specific failure.
 *
 * @evidence contracts/common.md#principled-implementation prepareClone establishes a pre-call projection and source graph independently of the actual result. Each spoiler must return literal null. A valid null fixture also projects to null, so that clean scenario cannot independently distinguish the sentinel from a valid null copy.
 * @evidence contracts/common.md#clear-and-simple-design One clean scenario delegates shared graph semantics; the existing spoiler loop retains its operation-specific diagnostics without duplicating clone traversal.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The supplied callback and authored spoilers execute directly. Portable source/value/reference checks replace transport omission equivalence without fixture-name or callback-text exceptions.
 * @evidence contracts/common.md#meaningful-documentation Native prose separates clean clone ownership from producer-specific invalid-input checks and states the preserved scenario sequence. The shared check documents its ordinary-data fixture premise.
 * @evidence contracts/testing.md#behavioral-verification The actual callback must return faithful independently owned data without mutating the clean input. Each spoiler must return literal null. A valid null fixture also projects to null, so that clean scenario cannot independently distinguish the sentinel from a valid null copy.
 * @evidence contracts/testing.md#independent-expectations The authored fixture and optional RESOLVE precede cloning; prepareClone snapshots that projection and original references. Spoiler-authored invalid values and paths determine failed-input expectations independently of native output.
 * @evidence contracts/testing.md#distinguishing-cases The calling native case supplies its declared clean shape and each existing spoiler. Portable units reject identity, shallow, lossy and source-mutating copies with primitive, empty, shared/cyclic and class-projection controls; this wrapper retains its own failed-input distinctions.
 * @evidence contracts/testing.md#execution-ownership Native generated/composite exports call this wrapper through TestServant discovery. Portable clone comparisons execute independently under plugin-free units; the wrapper retains the actual producer and diagnostic connection.
 * @evidence contracts/e2e.md#necessary-boundary The real Go-produced typia.plain.isClone callback and existing emitted diagnostic assertions must agree with the TypeScript declaration. A handwritten callback can exercise graph-check semantics but cannot prove that assembly or error/result binding.
 * @evidence contracts/e2e.md#shared-execution The calling family/composite batch shares its TestServant worker and workspace content-keyed native artifact across cases. Independent family workers still repeat project preparation; minimum cross-family sharing remains unresolved.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The clean and each spoiled value are generated separately; snapshots and results remain local. The caller closes its connected worker in finally, and ttsc owns artifact identity/invalidation rather than this helper.
 * @evidence contracts/e2e.md#preserved-coverage Only clean copy comparison delegates to the portable owner and gains pre-call/source/reference distinctions. Existing callback construction, fixture/spoiler inputs, invalid result/error/path assertions and discoverable native exports remain executed.
 */
export const _test_plain_isClone =
  (name: string) =>
  <T>(factory: TestStructure<T>) =>
  (clone: (input: T) => Resolved<T> | null): void => {
    const data: T = factory.generate();
    const check = prepareClone(
      data,
      factory.RESOLVE ? factory.RESOLVE(data) : data,
      `Bug on typia.plain.isClone(): failed to understand the ${name} type.`,
    );
    const cloned: Resolved<T> | null = clone(data);
    check(cloned);

    for (const spoil of factory.SPOILERS || []) {
      const elem: T = factory.generate();
      spoil(elem);

      if (clone(elem) !== null)
        throw new Error(
          `Bug on typia.plain.isClone(): failed to detect error on the ${name} type.`,
        );
    }
  };
