import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_assertCustom_CommentTagAtomicUnion = _test_assert(
  CustomGuardError,
)("CommentTagAtomicUnion")<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
  (input) =>
    typia.assert<CommentTagAtomicUnion>(input, (p) => new CustomGuardError(p)),
);
