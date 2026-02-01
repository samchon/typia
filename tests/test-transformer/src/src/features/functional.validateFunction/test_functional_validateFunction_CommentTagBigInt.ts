import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_functional_validateFunction_CommentTagBigInt = (): void => _test_functional_validateFunction(
  "CommentTagBigInt"
)(CommentTagBigInt)(
  (p: (input: CommentTagBigInt) => CommentTagBigInt) => typia.functional.validateFunction(p),
)