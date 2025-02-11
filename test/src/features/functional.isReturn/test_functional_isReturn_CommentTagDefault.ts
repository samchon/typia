import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_isReturn_CommentTagDefault = _test_functional_isReturn(
  "CommentTagDefault"
)(CommentTagDefault)(
  (p: (input: CommentTagDefault) => CommentTagDefault) => typia.functional.isReturn(p),
)