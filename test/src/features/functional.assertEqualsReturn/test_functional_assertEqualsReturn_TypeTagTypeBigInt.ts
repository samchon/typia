import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_functional_assertEqualsReturn_TypeTagTypeBigInt = (): void =>
  _test_functional_assertEqualsReturn(TypeGuardError)("TypeTagTypeBigInt")(
    TypeTagTypeBigInt,
  )((p: (input: TypeTagTypeBigInt) => TypeTagTypeBigInt) =>
    typia.functional.assertEqualsReturn(p),
  );
