import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_assertGuard_CommentTagTypeBigInt = _test_assertGuard(
  "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(CommentTagTypeBigInt)((input) =>
  typia.assertGuard<CommentTagTypeBigInt>(input),
);
