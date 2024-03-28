import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_assertParameters_TypeTagBigInt =
  _test_functional_assertParameters(TypeGuardError)("TypeTagBigInt")(
    TypeTagBigInt,
  )((p: (input: TypeTagBigInt) => TypeTagBigInt) =>
    typia.functional.assertParameters(p),
  );
