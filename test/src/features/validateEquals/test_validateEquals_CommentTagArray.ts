import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_validateEquals_CommentTagArray = _test_validateEquals(
  "CommentTagArray",
)<CommentTagArray>(CommentTagArray)((input) =>
  typia.validateEquals<CommentTagArray>(input),
);
