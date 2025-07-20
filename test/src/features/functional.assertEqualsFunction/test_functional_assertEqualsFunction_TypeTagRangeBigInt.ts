import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_assertEqualsFunction_TypeTagRangeBigInt =
  (): void =>
    _test_functional_assertEqualsFunction(TypeGuardError)("TypeTagRangeBigInt")(
      TypeTagRangeBigInt,
    )((p: (input: TypeTagRangeBigInt) => TypeTagRangeBigInt) =>
      typia.functional.assertEqualsFunction(p),
    );
