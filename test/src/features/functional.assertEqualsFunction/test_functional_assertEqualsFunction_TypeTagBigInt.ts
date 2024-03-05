import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_assertEqualsFunction_TypeTagBigInt =
  _test_functional_assertEqualsFunction(TypeGuardError)("TypeTagBigInt")(
    TypeTagBigInt,
  )((p: (input: TypeTagBigInt) => TypeTagBigInt) =>
    typia.functional.assertEqualsFunction(p),
  );
