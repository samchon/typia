import typia from "../../../src";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_misc_validateClone_CommentTagPattern = _test_misc_validateClone(
    "CommentTagPattern",
)<CommentTagPattern>(
    CommentTagPattern
)((input) => typia.misc.validateClone<CommentTagPattern>(input));
