import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_functional_validateReturn_CommentTagRangeBigInt = (): void => _test_functional_validateReturn(
  "CommentTagRangeBigInt"
)(CommentTagRangeBigInt)(
  (p: (input: CommentTagRangeBigInt) => CommentTagRangeBigInt) => typia.functional.validateReturn(p),
)