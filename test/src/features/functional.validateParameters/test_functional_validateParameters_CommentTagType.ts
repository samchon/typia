import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_validateParameters_CommentTagType = (): void => _test_functional_validateParameters(
  "CommentTagType"
)(CommentTagType)(
  (p: (input: CommentTagType) => CommentTagType) => typia.functional.validateParameters(p),
)