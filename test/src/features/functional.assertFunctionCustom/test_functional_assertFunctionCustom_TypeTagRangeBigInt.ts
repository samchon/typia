import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_assertFunctionCustom_TypeTagRangeBigInt =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)("TypeTagRangeBigInt")(
      TypeTagRangeBigInt,
    )((p: (input: TypeTagRangeBigInt) => TypeTagRangeBigInt) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
