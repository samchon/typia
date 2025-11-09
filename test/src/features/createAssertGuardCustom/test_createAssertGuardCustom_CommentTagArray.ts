import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_CommentTagArray = (): void => _test_assertGuard(CustomGuardError)(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)(typia.createAssertGuard<CommentTagArray>((p) => new CustomGuardError(p)));
