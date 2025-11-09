import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_createValidate_CommentTagBigInt = (): void => _test_validate(
    "CommentTagBigInt",
)<CommentTagBigInt>(
    CommentTagBigInt
)(typia.createValidate<CommentTagBigInt>());
