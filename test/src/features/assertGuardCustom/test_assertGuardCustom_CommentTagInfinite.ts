import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_CommentTagInfinite = (): void => _test_assertGuard(CustomGuardError)(
    "CommentTagInfinite",
)<CommentTagInfinite>(
    CommentTagInfinite
)((input) => typia.assertGuard<CommentTagInfinite>(input, (p) => new CustomGuardError(p)));
