import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_createAssertCustom_CommentTagTypeBigInt = _test_assert(
  CustomGuardError,
)("CommentTagTypeBigInt")<CommentTagTypeBigInt>(CommentTagTypeBigInt)(
  typia.createAssert<CommentTagTypeBigInt>((p) => new CustomGuardError(p)),
);
