import typia from "../../../src";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_assertEquals_CommentTagDefault = _test_assertEquals(
    "CommentTagDefault",
)<CommentTagDefault>(
    CommentTagDefault
)((input) => typia.assertEquals<CommentTagDefault>(input));
