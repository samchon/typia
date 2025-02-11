import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_functional_isFunction_CommentTagFormat = _test_functional_isFunction(
  "CommentTagFormat"
)(CommentTagFormat)(
  (p: (input: CommentTagFormat) => CommentTagFormat) => typia.functional.isFunction(p),
)