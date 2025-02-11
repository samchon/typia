import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_assertFunctionAsync_TypeTagRangeBigInt =
  _test_functional_assertFunctionAsync(TypeGuardError)("TypeTagRangeBigInt")(
    TypeTagRangeBigInt,
  )((p: (input: TypeTagRangeBigInt) => Promise<TypeTagRangeBigInt>) =>
    typia.functional.assertFunction(p),
  );
