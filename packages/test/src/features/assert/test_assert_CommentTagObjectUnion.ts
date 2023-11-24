import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_assert_CommentTagObjectUnion = _test_assert(
  "CommentTagObjectUnion",
)<CommentTagObjectUnion>(CommentTagObjectUnion)((input) =>
  typia.assert<CommentTagObjectUnion>(input),
);
