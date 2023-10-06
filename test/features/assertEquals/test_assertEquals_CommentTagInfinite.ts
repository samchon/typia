import typia from "../../../src";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_assertEquals_CommentTagInfinite = _test_assertEquals(
    "CommentTagInfinite",
)<CommentTagInfinite>(
    CommentTagInfinite
)((input) => typia.assertEquals<CommentTagInfinite>(input));
