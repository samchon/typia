import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_functional_validateParameters_CommentTagDefault = (): void => _test_functional_validateParameters(
  "CommentTagDefault"
)(CommentTagDefault)(
  (p: (input: CommentTagDefault) => CommentTagDefault) => typia.functional.validateParameters(p),
)