import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_assertGuard_CommentTagType = _test_assertGuard(
  "CommentTagType",
)<CommentTagType>(CommentTagType)((input) =>
  typia.assertGuard<CommentTagType>(input),
);
