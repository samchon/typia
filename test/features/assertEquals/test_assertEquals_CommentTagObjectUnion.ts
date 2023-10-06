import typia from "../../../src";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_assertEquals_CommentTagObjectUnion = _test_assertEquals(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(
    CommentTagObjectUnion
)((input) => typia.assertEquals<CommentTagObjectUnion>(input));
