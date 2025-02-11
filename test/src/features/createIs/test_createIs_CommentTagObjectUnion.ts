import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_createIs_CommentTagObjectUnion = _test_is(
    "CommentTagObjectUnion",
)<CommentTagObjectUnion>(
    CommentTagObjectUnion
)(typia.createIs<CommentTagObjectUnion>());
