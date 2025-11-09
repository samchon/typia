import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_createEquals_CommentTagFormat = (): void => _test_equals(
    "CommentTagFormat",
)<CommentTagFormat>(
    CommentTagFormat
)(typia.createEquals<CommentTagFormat>());
