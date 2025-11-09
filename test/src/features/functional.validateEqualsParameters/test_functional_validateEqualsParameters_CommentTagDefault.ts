import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_validateEqualsParameters_CommentTagDefault = (): void => _test_functional_validateEqualsParameters(
  "CommentTagDefault"
)(CommentTagDefault)(
  (p: (input: CommentTagDefault) => CommentTagDefault) => typia.functional.validateEqualsParameters(p),
)