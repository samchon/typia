import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_standardSchema_createValidate_CommentTagBigInt = _test_standardSchema_validate(
    "CommentTagBigInt",
)<CommentTagBigInt>(
    CommentTagBigInt
)(typia.createValidate<CommentTagBigInt>());
