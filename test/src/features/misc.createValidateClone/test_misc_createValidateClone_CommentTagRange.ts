import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_misc_createValidateClone_CommentTagRange = (): void => _test_misc_validateClone(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)(typia.misc.createValidateClone<CommentTagRange>());
