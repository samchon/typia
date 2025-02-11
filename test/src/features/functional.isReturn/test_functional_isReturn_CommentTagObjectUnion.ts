import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_functional_isReturn_CommentTagObjectUnion = _test_functional_isReturn(
  "CommentTagObjectUnion"
)(CommentTagObjectUnion)(
  (p: (input: CommentTagObjectUnion) => CommentTagObjectUnion) => typia.functional.isReturn(p),
)