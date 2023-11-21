import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_misc_assertClone_CommentTagType = _test_misc_assertClone(
  "CommentTagType",
)<CommentTagType>(CommentTagType)((input) =>
  typia.misc.assertClone<CommentTagType>(input),
);
