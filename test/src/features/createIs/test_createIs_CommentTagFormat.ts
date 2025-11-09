import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_createIs_CommentTagFormat = (): void => _test_is(
    "CommentTagFormat",
)<CommentTagFormat>(
    CommentTagFormat
)(typia.createIs<CommentTagFormat>());
