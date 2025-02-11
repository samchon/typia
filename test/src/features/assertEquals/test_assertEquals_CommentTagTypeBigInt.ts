import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_assertEquals_CommentTagTypeBigInt = _test_assertEquals(
  TypeGuardError,
)("CommentTagTypeBigInt")<CommentTagTypeBigInt>(CommentTagTypeBigInt)((input) =>
  typia.assertEquals<CommentTagTypeBigInt>(input),
);
