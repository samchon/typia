import typia from "../../../src";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_misc_createClone_CommentTagPattern = _test_misc_clone(
    "CommentTagPattern",
)<CommentTagPattern>(
    CommentTagPattern
)(typia.misc.createClone<CommentTagPattern>());
