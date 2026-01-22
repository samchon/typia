import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_assertFunction_TypeTagBigInt = (): void =>
  _test_functional_assertFunction(TypeGuardError)("TypeTagBigInt")(
    TypeTagBigInt,
  )((p: (input: TypeTagBigInt) => TypeTagBigInt) =>
    typia.functional.assertFunction(p),
  );
