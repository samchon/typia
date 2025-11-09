import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_createValidateEquals_CommentTagRange = (): void => _test_validateEquals(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)(typia.createValidateEquals<CommentTagRange>());
