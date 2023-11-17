import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_validateEquals_CommentTagNaN = _test_validateEquals(
  "CommentTagNaN",
)<CommentTagNaN>(CommentTagNaN)((input) =>
  typia.validateEquals<CommentTagNaN>(input),
);
