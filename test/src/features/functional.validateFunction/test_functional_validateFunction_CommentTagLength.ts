import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_validateFunction_CommentTagLength = (): void => _test_functional_validateFunction(
  "CommentTagLength"
)(CommentTagLength)(
  (p: (input: CommentTagLength) => CommentTagLength) => typia.functional.validateFunction(p),
)