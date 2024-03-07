import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_TypeTagRangeBigInt =
  _test_functional_assertFunction(CustomGuardError)("TypeTagRangeBigInt")(
    TypeTagRangeBigInt,
  )((p: (input: TypeTagRangeBigInt) => TypeTagRangeBigInt) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
