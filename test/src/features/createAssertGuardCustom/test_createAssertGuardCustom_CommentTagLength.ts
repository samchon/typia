import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagLength } from "../../structures/CommentTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_CommentTagLength = _test_assertGuard(CustomGuardError)(
    "CommentTagLength",
)<CommentTagLength>(
    CommentTagLength
)(typia.createAssertGuard<CommentTagLength>((p) => new CustomGuardError(p)));
