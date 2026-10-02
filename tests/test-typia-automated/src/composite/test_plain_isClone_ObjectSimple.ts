import { ObjectSimple } from "@typia/template";
import typia from "typia";

import { _test_plain_isClone } from "../internal/_test_plain_isClone";

/**
 * Verifies native typia.plain.isClone with the ObjectSimple fixture.
 *
 * This composite retains the operation whose full validating matrix is
 * disabled; the shared helper owns its exact clean and invalid-result
 * assertions.
 *
 * 1. Bind the real ObjectSimple operation and its existing companion producers.
 * 2. Execute the shared helper's clean scenario and applicable invalid inputs.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual callback must return faithful independently owned data without mutating the clean input. Each spoiler must return literal null. A valid null fixture also projects to null, so that clean scenario cannot independently distinguish the sentinel from a valid null copy.
 * @evidence contracts/testing.md#independent-expectations The authored fixture and optional RESOLVE precede cloning; prepareClone snapshots that projection and original references. Spoiler-authored invalid values and paths determine failed-input expectations independently of native output.
 * @evidence contracts/testing.md#distinguishing-cases This entry supplies only ObjectSimple to the shared helper. The calling native case supplies its declared clean shape and each existing spoiler. Portable units reject identity, shallow, lossy and source-mutating copies with primitive, empty, shared/cyclic and class-projection controls; this wrapper retains its own failed-input distinctions.
 * @evidence contracts/testing.md#execution-ownership TestServant discovers test_plain_isClone_ObjectSimple in src/composite during test-typia-automated start. The existing helper owns comparisons, traversal and spoiler loops; this exported entry owns the actual native callback identity and any companion encoder/decoder/message binding.
 * @evidence contracts/e2e.md#necessary-boundary The actual Go-generated typia.plain.isClone<ObjectSimple> must preserve this declaration's data/validation decisions and operation-specific result shape. Handwritten callbacks can test oracle semantics but cannot establish that public producer binding.
 * @evidence contracts/e2e.md#shared-execution The complete generated population and all composites share one TestServant worker/project and content-keyed native plugin artifact. This entry creates no compiler process, separate installation or per-case worker.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The helper creates its own fixture values and local comparisons for this call. No callback or factory is replaced; module-scoped fixture randomness keeps its existing contract. The suite runner owns the one worker and closes it in finally; cold-cache behavior is not claimed.
 * @evidence contracts/e2e.md#preserved-coverage The existing ObjectSimple fixture, public call spelling, helper invocation and companion bindings remain unchanged. All original assertions execute through the same helper; this documentation adds no claim of a full disabled generated matrix.
 */
export const test_plain_isClone_ObjectSimple = (): void =>
  _test_plain_isClone("ObjectSimple")<ObjectSimple>(ObjectSimple)((input) =>
    typia.plain.isClone<ObjectSimple>(input),
  );
