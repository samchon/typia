import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_createAssertEquals_CommentTagAtomicUnion = _test_assertEquals(
  TypeGuardError,
)("CommentTagAtomicUnion")<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
  typia.createAssertEquals<CommentTagAtomicUnion>(),
);
