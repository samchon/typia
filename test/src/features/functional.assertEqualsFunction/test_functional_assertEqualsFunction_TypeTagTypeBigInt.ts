import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_functional_assertEqualsFunction_TypeTagTypeBigInt =
  _test_functional_assertEqualsFunction(TypeGuardError)("TypeTagTypeBigInt")(
    TypeTagTypeBigInt,
  )((p: (input: TypeTagTypeBigInt) => TypeTagTypeBigInt) =>
    typia.functional.assertEqualsFunction(p),
  );
