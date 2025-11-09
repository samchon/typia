import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_createIs_CommentTagNaN = (): void => _test_is(
    "CommentTagNaN",
)<CommentTagNaN>(
    CommentTagNaN
)(typia.createIs<CommentTagNaN>());
