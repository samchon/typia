import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_validateEquals_CommentTagType = (): void => _test_validateEquals(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)((input) => typia.validateEquals<CommentTagType>(input));
