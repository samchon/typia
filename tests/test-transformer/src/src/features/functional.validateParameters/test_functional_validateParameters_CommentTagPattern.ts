import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_validateParameters_CommentTagPattern = (): void => _test_functional_validateParameters(
  "CommentTagPattern"
)(CommentTagPattern)(
  (p: (input: CommentTagPattern) => CommentTagPattern) => typia.functional.validateParameters(p),
)