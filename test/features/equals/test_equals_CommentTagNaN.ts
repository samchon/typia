import typia from "../../../src";

import { _test_equals } from "../../internal/_test_equals";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_equals_CommentTagNaN = _test_equals(
    "CommentTagNaN",
)<CommentTagNaN>(
    CommentTagNaN
)((input) => typia.equals<CommentTagNaN>(input));
