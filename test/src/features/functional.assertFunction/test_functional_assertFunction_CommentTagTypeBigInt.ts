import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_CommentTagTypeBigInt = (): void => _test_functional_assertFunction(TypeGuardError)(
  "CommentTagTypeBigInt"
)(CommentTagTypeBigInt)(
  (p: (input: CommentTagTypeBigInt) => CommentTagTypeBigInt) => typia.functional.assertFunction(p),
)