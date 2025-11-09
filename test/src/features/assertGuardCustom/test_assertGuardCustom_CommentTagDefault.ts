import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_CommentTagDefault = (): void => _test_assertGuard(CustomGuardError)(
    "CommentTagDefault",
)<CommentTagDefault>(
    CommentTagDefault
)((input) => typia.assertGuard<CommentTagDefault>(input, (p) => new CustomGuardError(p)));
