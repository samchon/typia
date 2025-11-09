import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_equalsReturn_CommentTagArray = (): void => _test_functional_equalsReturn(
  "CommentTagArray"
)(CommentTagArray)(
  (p: (input: CommentTagArray) => CommentTagArray) => typia.functional.equalsReturn(p),
)