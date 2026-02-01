import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_validateEqualsReturn_CommentTagArray = (): void => _test_functional_validateEqualsReturn(
  "CommentTagArray"
)(CommentTagArray)(
  (p: (input: CommentTagArray) => CommentTagArray) => typia.functional.validateEqualsReturn(p),
)