import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_standardSchema_createValidate_CommentTagType = _test_standardSchema_validate(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)(typia.createValidate<CommentTagType>());
