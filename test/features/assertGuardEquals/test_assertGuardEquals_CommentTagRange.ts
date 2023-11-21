import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_assertGuardEquals_CommentTagRange = _test_assertGuardEquals(
  "CommentTagRange",
)<CommentTagRange>(CommentTagRange)((input) =>
  typia.assertGuardEquals<CommentTagRange>(input),
);
