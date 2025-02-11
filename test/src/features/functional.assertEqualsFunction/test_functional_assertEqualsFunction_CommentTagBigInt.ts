import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_CommentTagBigInt = _test_functional_assertEqualsFunction(TypeGuardError)(
  "CommentTagBigInt"
)(CommentTagBigInt)(
  (p: (input: CommentTagBigInt) => CommentTagBigInt) => typia.functional.assertEqualsFunction(p),
)