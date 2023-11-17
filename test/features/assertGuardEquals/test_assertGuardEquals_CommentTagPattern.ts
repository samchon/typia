import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_assertGuardEquals_CommentTagPattern = _test_assertGuardEquals(
    "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)((input) =>
    typia.assertGuardEquals<CommentTagPattern>(input),
);
