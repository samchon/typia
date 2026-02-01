import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_createEquals_CommentTagType = (): void => _test_equals(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)(typia.createEquals<CommentTagType>());
