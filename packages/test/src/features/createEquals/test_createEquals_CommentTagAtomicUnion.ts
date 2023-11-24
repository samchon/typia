import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_createEquals_CommentTagAtomicUnion = _test_equals(
  "CommentTagAtomicUnion",
)<CommentTagAtomicUnion>(CommentTagAtomicUnion)(
  typia.createEquals<CommentTagAtomicUnion>(),
);
