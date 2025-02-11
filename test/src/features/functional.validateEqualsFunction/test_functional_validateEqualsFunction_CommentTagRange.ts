import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_validateEqualsFunction_CommentTagRange = _test_functional_validateEqualsFunction(
  "CommentTagRange"
)(CommentTagRange)(
  (p: (input: CommentTagRange) => CommentTagRange) => typia.functional.validateEqualsFunction(p),
)