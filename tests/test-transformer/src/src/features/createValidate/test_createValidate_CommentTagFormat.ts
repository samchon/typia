import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_createValidate_CommentTagFormat = (): void => _test_validate(
    "CommentTagFormat",
)<CommentTagFormat>(
    CommentTagFormat
)(typia.createValidate<CommentTagFormat>());
