import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_CommentTagRange = (): void => _test_assertGuard(CustomGuardError)(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)((input) => typia.assertGuard<CommentTagRange>(input, (p) => new CustomGuardError(p)));
