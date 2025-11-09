import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_validateFunction_CommentTagType = (): void => _test_functional_validateFunction(
  "CommentTagType"
)(CommentTagType)(
  (p: (input: CommentTagType) => CommentTagType) => typia.functional.validateFunction(p),
)