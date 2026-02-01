import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_standardSchema_createValidate_CommentTagArray = (): void => _test_standardSchema_validate(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)(typia.createValidate<CommentTagArray>());
