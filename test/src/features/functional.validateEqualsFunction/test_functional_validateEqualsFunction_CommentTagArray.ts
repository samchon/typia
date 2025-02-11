import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_functional_validateEqualsFunction_CommentTagArray = _test_functional_validateEqualsFunction(
  "CommentTagArray"
)(CommentTagArray)(
  (p: (input: CommentTagArray) => CommentTagArray) => typia.functional.validateEqualsFunction(p),
)