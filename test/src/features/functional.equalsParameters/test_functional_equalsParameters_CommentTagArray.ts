import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_equalsParameters_CommentTagArray = _test_functional_equalsParameters(
  "CommentTagArray"
)(CommentTagArray)(
  (p: (input: CommentTagArray) => CommentTagArray) => typia.functional.equalsParameters(p),
)