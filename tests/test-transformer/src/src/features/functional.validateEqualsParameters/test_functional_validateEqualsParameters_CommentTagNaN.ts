import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_validateEqualsParameters_CommentTagNaN = (): void => _test_functional_validateEqualsParameters(
  "CommentTagNaN"
)(CommentTagNaN)(
  (p: (input: CommentTagNaN) => CommentTagNaN) => typia.functional.validateEqualsParameters(p),
)