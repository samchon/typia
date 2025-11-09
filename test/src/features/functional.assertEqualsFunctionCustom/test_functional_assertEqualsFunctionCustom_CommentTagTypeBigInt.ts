import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { CommentTagTypeBigInt } from "../../structures/CommentTagTypeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_CommentTagTypeBigInt = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "CommentTagTypeBigInt"
)(CommentTagTypeBigInt)(
  (p: (input: CommentTagTypeBigInt) => CommentTagTypeBigInt) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)