import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_assert_CommentTagBigInt = _test_assert(
  "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)((input) =>
  typia.assert<CommentTagBigInt>(input),
);
