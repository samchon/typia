import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_is_CommentTagTypeBigInt = (): void => _test_is(
    "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(
    CommentTagTypeBigInt
)((input) => typia.is<CommentTagTypeBigInt>(input));
