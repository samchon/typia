import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_misc_createValidateClone_CommentTagType = (): void => _test_misc_validateClone(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)(typia.misc.createValidateClone<CommentTagType>());
