import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_assertGuard_CommentTagBigInt = _test_assertGuard(
    "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)((input) =>
    typia.assertGuard<CommentTagBigInt>(input),
);
