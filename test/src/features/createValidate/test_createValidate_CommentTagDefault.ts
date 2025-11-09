import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_createValidate_CommentTagDefault = (): void => _test_validate(
    "CommentTagDefault",
)<CommentTagDefault>(
    CommentTagDefault
)(typia.createValidate<CommentTagDefault>());
