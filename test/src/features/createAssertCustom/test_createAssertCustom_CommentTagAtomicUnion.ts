import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_createAssertCustom_CommentTagAtomicUnion = _test_assert(
  CustomGuardError,
)("CommentTagAtomicUnion")<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
  typia.createAssert<CommentTagAtomicUnion>((p) => new CustomGuardError(p)),
);
