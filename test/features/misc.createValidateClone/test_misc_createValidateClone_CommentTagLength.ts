import typia from "../../../src";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_misc_createValidateClone_CommentTagLength = _test_misc_validateClone(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)(typia.misc.createValidateClone<CommentTagLength>());
