import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_assertGuardEquals_CommentTagBigInt = _test_assertGuardEquals(
    "CommentTagBigInt",
)<CommentTagBigInt>(CommentTagBigInt)((input) =>
    typia.assertGuardEquals<CommentTagBigInt>(input),
);
