import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_assertFunctionAsyncCustom_TypeTagRangeBigInt =
  _test_functional_assertFunctionAsync(CustomGuardError)("TypeTagRangeBigInt")(
    TypeTagRangeBigInt,
  )((p: (input: TypeTagRangeBigInt) => Promise<TypeTagRangeBigInt>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
