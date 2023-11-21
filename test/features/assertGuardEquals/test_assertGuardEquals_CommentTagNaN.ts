import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_assertGuardEquals_CommentTagNaN = _test_assertGuardEquals(
  "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)((input) =>
  typia.assertGuardEquals<CommentTagNaN>(input),
);
