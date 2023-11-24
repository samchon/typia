import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_assertEquals_CommentTagArray = _test_assertEquals(
  "CommentTagArray",
)<CommentTagArray>(CommentTagArray)((input) =>
  typia.assertEquals<CommentTagArray>(input),
);
