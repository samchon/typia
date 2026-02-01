import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_misc_createValidateClone_CommentTagPattern = (): void => _test_misc_validateClone(
    "CommentTagPattern",
)<CommentTagPattern>(
    CommentTagPattern
)(typia.misc.createValidateClone<CommentTagPattern>());
