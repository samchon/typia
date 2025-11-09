import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_equals_CommentTagRangeBigInt = (): void => _test_equals(
    "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(
    CommentTagRangeBigInt
)((input) => typia.equals<CommentTagRangeBigInt>(input));
