import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_is_CommentTagObjectUnion = _test_is(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(
    CommentTagObjectUnion
)((input) => typia.is<CommentTagObjectUnion>(input));
