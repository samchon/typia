import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_validateEquals_CommentTagDefault = _test_validateEquals(
  "CommentTagDefault",
)<CommentTagDefault>(CommentTagDefault)((input) =>
  typia.validateEquals<CommentTagDefault>(input),
);
