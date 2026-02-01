import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_equals_CommentTagFormat = (): void => _test_equals(
    "CommentTagFormat",
)<CommentTagFormat>(
    CommentTagFormat
)((input) => typia.equals<CommentTagFormat>(input));
