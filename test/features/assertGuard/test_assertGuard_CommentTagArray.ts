import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_assertGuard_CommentTagArray = _test_assertGuard(
    "CommentTagArray",
)<CommentTagArray>(CommentTagArray)((input) =>
    typia.assertGuard<CommentTagArray>(input),
);
