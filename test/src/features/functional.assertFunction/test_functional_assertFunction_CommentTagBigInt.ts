import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_CommentTagBigInt = _test_functional_assertFunction(TypeGuardError)(
  "CommentTagBigInt"
)(CommentTagBigInt)(
  (p: (input: CommentTagBigInt) => CommentTagBigInt) => typia.functional.assertFunction(p),
)