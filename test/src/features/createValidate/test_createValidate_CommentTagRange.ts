import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_createValidate_CommentTagRange = (): void => _test_validate(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)(typia.createValidate<CommentTagRange>());
