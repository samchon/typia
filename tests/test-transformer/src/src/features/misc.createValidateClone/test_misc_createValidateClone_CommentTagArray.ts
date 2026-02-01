import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_misc_createValidateClone_CommentTagArray = (): void => _test_misc_validateClone(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)(typia.misc.createValidateClone<CommentTagArray>());
