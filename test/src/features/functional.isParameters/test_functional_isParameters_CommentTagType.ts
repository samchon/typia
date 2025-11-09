import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_isParameters_CommentTagType = (): void => _test_functional_isParameters(
  "CommentTagType"
)(CommentTagType)(
  (p: (input: CommentTagType) => CommentTagType) => typia.functional.isParameters(p),
)