import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_functional_validateEqualsReturn_CommentTagRange = (): void => _test_functional_validateEqualsReturn(
  "CommentTagRange"
)(CommentTagRange)(
  (p: (input: CommentTagRange) => CommentTagRange) => typia.functional.validateEqualsReturn(p),
)