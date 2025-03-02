import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_compare_equals_CommentTagTypeBigInt = _test_compare_equals(
    "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(
    CommentTagTypeBigInt
)((a, b) => typia.compare.equals<CommentTagTypeBigInt>(a, b));
