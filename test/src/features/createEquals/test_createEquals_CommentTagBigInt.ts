import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_createEquals_CommentTagBigInt = (): void => _test_equals(
    "CommentTagBigInt",
)<CommentTagBigInt>(
    CommentTagBigInt
)(typia.createEquals<CommentTagBigInt>());
