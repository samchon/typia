import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { CommentTagNaN } from "../../structures/CommentTagNaN";

export const test_functional_isReturn_CommentTagNaN = (): void => _test_functional_isReturn(
  "CommentTagNaN"
)(CommentTagNaN)(
  (p: (input: CommentTagNaN) => CommentTagNaN) => typia.functional.isReturn(p),
)