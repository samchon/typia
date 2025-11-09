import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

export const test_functional_isReturn_CommentTagTypeBigInt = (): void => _test_functional_isReturn(
  "CommentTagTypeBigInt"
)(CommentTagTypeBigInt)(
  (p: (input: CommentTagTypeBigInt) => CommentTagTypeBigInt) => typia.functional.isReturn(p),
)