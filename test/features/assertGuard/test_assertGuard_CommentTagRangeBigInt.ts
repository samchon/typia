import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_assertGuard_CommentTagRangeBigInt = _test_assertGuard(
  "CommentTagRangeBigInt",
)<CommentTagRangeBigInt>(CommentTagRangeBigInt)((input) =>
  typia.assertGuard<CommentTagRangeBigInt>(input),
);
