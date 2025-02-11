import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_CommentTagLength = _test_assertGuardEquals(CustomGuardError)(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)(typia.createAssertGuardEquals<CommentTagLength>((p) => new CustomGuardError(p)));
