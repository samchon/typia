import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_CommentTagTypeBigInt = _test_assert(CustomGuardError)(
    "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(
    CommentTagTypeBigInt
)((input) => typia.assert<CommentTagTypeBigInt>(input, (p) => new CustomGuardError(p)));
