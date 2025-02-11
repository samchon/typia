import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagRange } from "../../structures/CommentTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_CommentTagRange = _test_assert(CustomGuardError)(
    "CommentTagRange",
)<CommentTagRange>(
    CommentTagRange
)((input) => typia.assert<CommentTagRange>(input, (p) => new CustomGuardError(p)));
