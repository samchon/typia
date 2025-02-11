import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_isFunction_CommentTagBigInt = _test_functional_isFunction(
  "CommentTagBigInt"
)(CommentTagBigInt)(
  (p: (input: CommentTagBigInt) => CommentTagBigInt) => typia.functional.isFunction(p),
)