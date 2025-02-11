import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_equalsFunction_CommentTagLength = _test_functional_equalsFunction(
  "CommentTagLength"
)(CommentTagLength)(
  (p: (input: CommentTagLength) => CommentTagLength) => typia.functional.equalsFunction(p),
)