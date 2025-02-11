import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_functional_isReturn_CommentTagPattern = _test_functional_isReturn(
  "CommentTagPattern"
)(CommentTagPattern)(
  (p: (input: CommentTagPattern) => CommentTagPattern) => typia.functional.isReturn(p),
)