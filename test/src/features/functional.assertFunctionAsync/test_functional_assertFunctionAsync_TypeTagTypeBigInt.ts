import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_functional_assertFunctionAsync_TypeTagTypeBigInt =
  _test_functional_assertFunctionAsync(TypeGuardError)("TypeTagTypeBigInt")(
    TypeTagTypeBigInt,
  )((p: (input: TypeTagTypeBigInt) => Promise<TypeTagTypeBigInt>) =>
    typia.functional.assertFunction(p),
  );
