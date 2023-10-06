import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_is_CommentTagNaN = _test_is(
    "CommentTagNaN",
)<CommentTagNaN>(
    CommentTagNaN
)((input) => typia.is<CommentTagNaN>(input));
