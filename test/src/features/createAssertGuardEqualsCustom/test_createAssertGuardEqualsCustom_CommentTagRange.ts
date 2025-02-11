import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_CommentTagRange = _test_assertGuardEquals(CustomGuardError)(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)(typia.createAssertGuardEquals<CommentTagRange>((p) => new CustomGuardError(p)));
