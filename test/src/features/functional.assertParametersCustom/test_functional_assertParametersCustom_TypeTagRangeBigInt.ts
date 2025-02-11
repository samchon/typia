import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_assertParametersCustom_TypeTagRangeBigInt =
  _test_functional_assertParameters(CustomGuardError)("TypeTagRangeBigInt")(
    TypeTagRangeBigInt,
  )((p: (input: TypeTagRangeBigInt) => TypeTagRangeBigInt) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
