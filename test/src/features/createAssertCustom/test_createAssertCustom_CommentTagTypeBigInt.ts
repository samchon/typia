import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_CommentTagTypeBigInt = (): void => _test_assert(CustomGuardError)(
    "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(
    CommentTagTypeBigInt
)(typia.createAssert<CommentTagTypeBigInt>((p) => new CustomGuardError(p)));
