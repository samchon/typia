import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_functional_equalsReturn_CommentTagType = _test_functional_equalsReturn(
  "CommentTagType"
)(CommentTagType)(
  (p: (input: CommentTagType) => CommentTagType) => typia.functional.equalsReturn(p),
)