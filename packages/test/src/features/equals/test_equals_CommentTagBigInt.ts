import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_equals_CommentTagBigInt = _test_equals(
  "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)((input) =>
  typia.equals<CommentTagBigInt>(input),
);
