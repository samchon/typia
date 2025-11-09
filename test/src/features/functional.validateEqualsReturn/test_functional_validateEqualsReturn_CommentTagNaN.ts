import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_validateEqualsReturn_CommentTagNaN = (): void => _test_functional_validateEqualsReturn(
  "CommentTagNaN"
)(CommentTagNaN)(
  (p: (input: CommentTagNaN) => CommentTagNaN) => typia.functional.validateEqualsReturn(p),
)