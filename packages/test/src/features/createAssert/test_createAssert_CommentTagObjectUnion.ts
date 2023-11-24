import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_createAssert_CommentTagObjectUnion = _test_assert(
  "CommentTagObjectUnion",
)<CommentTagObjectUnion>(CommentTagObjectUnion)(
  typia.createAssert<CommentTagObjectUnion>(),
);
