import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_equalsReturn_CommentTagRange = _test_functional_equalsReturn(
  "CommentTagRange"
)(CommentTagRange)(
  (p: (input: CommentTagRange) => CommentTagRange) => typia.functional.equalsReturn(p),
)