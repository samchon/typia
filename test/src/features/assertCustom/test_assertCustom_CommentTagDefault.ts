import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_CommentTagDefault = _test_assert(CustomGuardError)(
    "CommentTagDefault",
)<CommentTagDefault>(
    CommentTagDefault
)((input) => typia.assert<CommentTagDefault>(input, (p) => new CustomGuardError(p)));
