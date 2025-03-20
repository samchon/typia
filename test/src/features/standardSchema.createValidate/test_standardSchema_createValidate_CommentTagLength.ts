import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_standardSchema_createValidate_CommentTagLength = _test_standardSchema_validate(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)(typia.createValidate<CommentTagLength>());
