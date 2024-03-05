import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_validateEqualsFunction_TypeTagRangeBigInt =
  _test_functional_validateEqualsFunction("TypeTagRangeBigInt")(
    TypeTagRangeBigInt,
  )((p: (input: TypeTagRangeBigInt) => TypeTagRangeBigInt) =>
    typia.functional.validateEqualsFunction(p),
  );
