import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_equalsFunction_CommentTagDefault = _test_functional_equalsFunction(
  "CommentTagDefault"
)(CommentTagDefault)(
  (p: (input: CommentTagDefault) => CommentTagDefault) => typia.functional.equalsFunction(p),
)