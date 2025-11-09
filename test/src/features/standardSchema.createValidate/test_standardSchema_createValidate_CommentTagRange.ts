import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_standardSchema_createValidate_CommentTagRange = (): void => _test_standardSchema_validate(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)(typia.createValidate<CommentTagRange>());
