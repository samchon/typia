import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_assertGuardEquals_CommentTagDefault = _test_assertGuardEquals(
    "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)((input) =>
    typia.assertGuardEquals<CommentTagDefault>(input),
);
