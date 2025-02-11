import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_createIs_CommentTagArray = _test_is(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)(typia.createIs<CommentTagArray>());
