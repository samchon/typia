import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_assertEqualsReturnCustom_TypeTagRangeBigInt =
  _test_functional_assertEqualsReturn(CustomGuardError)("TypeTagRangeBigInt")(
    TypeTagRangeBigInt,
  )((p: (input: TypeTagRangeBigInt) => TypeTagRangeBigInt) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
