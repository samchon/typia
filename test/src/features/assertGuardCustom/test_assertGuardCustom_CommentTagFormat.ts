import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_CommentTagFormat = (): void => _test_assertGuard(CustomGuardError)(
    "CommentTagFormat",
)<CommentTagFormat>(
    CommentTagFormat
)((input) => typia.assertGuard<CommentTagFormat>(input, (p) => new CustomGuardError(p)));
