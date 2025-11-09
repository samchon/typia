import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_createIs_CommentTagInfinite = (): void => _test_is(
    "CommentTagInfinite",
)<CommentTagInfinite>(
    CommentTagInfinite
)(typia.createIs<CommentTagInfinite>());
