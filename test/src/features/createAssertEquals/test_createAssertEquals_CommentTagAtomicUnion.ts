import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_CommentTagAtomicUnion = _test_assertEquals(
  TypeGuardError,
)("CommentTagAtomicUnion")<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
  typia.createAssertEquals<CommentTagAtomicUnion>(),
);
