import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_assertFunctionAsyncCustom_TypeTagBigInt =
  _test_functional_assertFunctionAsync(CustomGuardError)("TypeTagBigInt")(
    TypeTagBigInt,
  )((p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
