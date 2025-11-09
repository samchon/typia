import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_isReturn_CommentTagBigInt = (): void => _test_functional_isReturn(
  "CommentTagBigInt"
)(CommentTagBigInt)(
  (p: (input: CommentTagBigInt) => CommentTagBigInt) => typia.functional.isReturn(p),
)