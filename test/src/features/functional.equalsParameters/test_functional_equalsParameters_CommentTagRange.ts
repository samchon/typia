import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_equalsParameters_CommentTagRange = _test_functional_equalsParameters(
  "CommentTagRange"
)(CommentTagRange)(
  (p: (input: CommentTagRange) => CommentTagRange) => typia.functional.equalsParameters(p),
)