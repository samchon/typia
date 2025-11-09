import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagType } from "../../structures/CommentTagType";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_CommentTagType = (): void => _test_assertGuardEquals(CustomGuardError)(
    "CommentTagType",
)<CommentTagType>(
    CommentTagType
)(typia.createAssertGuardEquals<CommentTagType>((p) => new CustomGuardError(p)));
