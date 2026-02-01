import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_createValidate_CommentTagArray = (): void => _test_validate(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)(typia.createValidate<CommentTagArray>());
