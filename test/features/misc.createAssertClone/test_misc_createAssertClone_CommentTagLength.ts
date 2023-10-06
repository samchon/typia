import typia from "../../../src";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_misc_createAssertClone_CommentTagLength = _test_misc_assertClone(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)(typia.misc.createAssertClone<CommentTagLength>());
