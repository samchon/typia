import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_createAssert_CommentTagAtomicUnion = _test_assert(
  TypeGuardError,
)("CommentTagAtomicUnion")<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
  typia.createAssert<CommentTagAtomicUnion>(),
);
