import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_TypeTagRangeBigInt =
  _test_functional_assertParametersAsync(TypeGuardError)("TypeTagRangeBigInt")(
    TypeTagRangeBigInt,
  )((p: (input: TypeTagRangeBigInt) => Promise<TypeTagRangeBigInt>) =>
    typia.functional.assertParameters(p),
  );
