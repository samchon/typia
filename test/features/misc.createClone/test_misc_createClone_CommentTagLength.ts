import typia from "../../../src";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_misc_createClone_CommentTagLength = _test_misc_clone(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)(typia.misc.createClone<CommentTagLength>());
