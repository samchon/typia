import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_functional_isFunction_CommentTagInfinite = _test_functional_isFunction(
  "CommentTagInfinite"
)(CommentTagInfinite)(
  (p: (input: CommentTagInfinite) => CommentTagInfinite) => typia.functional.isFunction(p),
)