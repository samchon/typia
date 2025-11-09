import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_validateEqualsReturn_CommentTagDefault = (): void => _test_functional_validateEqualsReturn(
  "CommentTagDefault"
)(CommentTagDefault)(
  (p: (input: CommentTagDefault) => CommentTagDefault) => typia.functional.validateEqualsReturn(p),
)