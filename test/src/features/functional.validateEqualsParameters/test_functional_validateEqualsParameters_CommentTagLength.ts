import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_validateEqualsParameters_CommentTagLength = (): void => _test_functional_validateEqualsParameters(
  "CommentTagLength"
)(CommentTagLength)(
  (p: (input: CommentTagLength) => CommentTagLength) => typia.functional.validateEqualsParameters(p),
)