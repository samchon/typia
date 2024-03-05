import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_functional_assertFunctionCustom_TypeTagTypeBigInt =
  _test_functional_assertFunction(CustomGuardError)("TypeTagTypeBigInt")(
    TypeTagTypeBigInt,
  )((p: (input: TypeTagTypeBigInt) => TypeTagTypeBigInt) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
