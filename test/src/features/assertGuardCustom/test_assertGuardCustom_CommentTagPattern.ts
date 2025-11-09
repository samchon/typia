import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_CommentTagPattern = (): void => _test_assertGuard(CustomGuardError)(
    "CommentTagPattern",
)<CommentTagPattern>(
    CommentTagPattern
)((input) => typia.assertGuard<CommentTagPattern>(input, (p) => new CustomGuardError(p)));
