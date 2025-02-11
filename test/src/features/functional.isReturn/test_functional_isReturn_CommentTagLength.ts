import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_functional_isReturn_CommentTagLength = _test_functional_isReturn(
  "CommentTagLength"
)(CommentTagLength)(
  (p: (input: CommentTagLength) => CommentTagLength) => typia.functional.isReturn(p),
)