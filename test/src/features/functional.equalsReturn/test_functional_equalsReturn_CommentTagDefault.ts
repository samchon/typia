import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_equalsReturn_CommentTagDefault = _test_functional_equalsReturn(
  "CommentTagDefault"
)(CommentTagDefault)(
  (p: (input: CommentTagDefault) => CommentTagDefault) => typia.functional.equalsReturn(p),
)