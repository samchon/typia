import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_assertGuardEquals_CommentTagLength = _test_assertGuardEquals(
  "CommentTagLength",
)<CommentTagLength>(CommentTagLength)((input) =>
  typia.assertGuardEquals<CommentTagLength>(input),
);
