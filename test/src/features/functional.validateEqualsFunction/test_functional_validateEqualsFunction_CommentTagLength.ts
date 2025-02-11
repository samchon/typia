import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_validateEqualsFunction_CommentTagLength = _test_functional_validateEqualsFunction(
  "CommentTagLength"
)(CommentTagLength)(
  (p: (input: CommentTagLength) => CommentTagLength) => typia.functional.validateEqualsFunction(p),
)