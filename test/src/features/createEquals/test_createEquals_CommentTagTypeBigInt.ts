import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_createEquals_CommentTagTypeBigInt = (): void => _test_equals(
    "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(
    CommentTagTypeBigInt
)(typia.createEquals<CommentTagTypeBigInt>());
