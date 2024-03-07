import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_TypeTagBigInt =
  _test_functional_assertFunction(TypeGuardError)("TypeTagBigInt")(
    TypeTagBigInt,
  )((p: (input: TypeTagBigInt) => TypeTagBigInt) =>
    typia.functional.assertFunction(p),
  );
