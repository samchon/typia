import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_is_CommentTagTypeBigInt = _test_is(
    "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(
    CommentTagTypeBigInt
)((input) => typia.is<CommentTagTypeBigInt>(input));
