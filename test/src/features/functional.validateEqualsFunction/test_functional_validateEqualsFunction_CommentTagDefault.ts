import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_validateEqualsFunction_CommentTagDefault = _test_functional_validateEqualsFunction(
  "CommentTagDefault"
)(CommentTagDefault)(
  (p: (input: CommentTagDefault) => CommentTagDefault) => typia.functional.validateEqualsFunction(p),
)