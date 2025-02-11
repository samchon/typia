import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagArray } from "../../structures/CommentTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_CommentTagArray = _test_assert(CustomGuardError)(
    "CommentTagArray",
)<CommentTagArray>(
    CommentTagArray
)((input) => typia.assert<CommentTagArray>(input, (p) => new CustomGuardError(p)));
