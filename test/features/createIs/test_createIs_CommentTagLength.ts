import typia from "../../../src";

import { _test_is } from "../../internal/_test_is";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_createIs_CommentTagLength = _test_is(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)(typia.createIs<CommentTagLength>());
