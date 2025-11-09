import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_TypeTagRangeBigInt = (): Promise<void> => _test_functional_assertFunctionAsync(TypeGuardError)(
  "TypeTagRangeBigInt"
)(TypeTagRangeBigInt)(
  (p: (input: TypeTagRangeBigInt) => Promise<TypeTagRangeBigInt>) =>
    typia.functional.assertFunction(p),
)