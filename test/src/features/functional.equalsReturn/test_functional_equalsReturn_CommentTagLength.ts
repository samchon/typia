import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_equalsReturn_CommentTagLength = _test_functional_equalsReturn(
  "CommentTagLength"
)(CommentTagLength)(
  (p: (input: CommentTagLength) => CommentTagLength) => typia.functional.equalsReturn(p),
)