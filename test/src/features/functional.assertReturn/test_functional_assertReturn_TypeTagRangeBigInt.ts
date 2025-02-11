import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_assertReturn_TypeTagRangeBigInt =
  _test_functional_assertReturn(TypeGuardError)("TypeTagRangeBigInt")(
    TypeTagRangeBigInt,
  )((p: (input: TypeTagRangeBigInt) => TypeTagRangeBigInt) =>
    typia.functional.assertReturn(p),
  );
