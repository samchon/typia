import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_createEquals_CommentTagLength = _test_equals(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)(typia.createEquals<CommentTagLength>());
