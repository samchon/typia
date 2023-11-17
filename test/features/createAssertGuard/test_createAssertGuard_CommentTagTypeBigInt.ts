import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_createAssertGuard_CommentTagTypeBigInt = _test_assertGuard(
  "CommentTagTypeBigInt",
)<CommentTagTypeBigInt>(CommentTagTypeBigInt)(
  typia.createAssertGuard<CommentTagTypeBigInt>(),
);
