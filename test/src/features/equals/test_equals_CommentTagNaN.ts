import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_equals_CommentTagNaN = (): void => _test_equals(
    "CommentTagNaN",
)<CommentTagNaN>(
    CommentTagNaN
)((input) => typia.equals<CommentTagNaN>(input));
