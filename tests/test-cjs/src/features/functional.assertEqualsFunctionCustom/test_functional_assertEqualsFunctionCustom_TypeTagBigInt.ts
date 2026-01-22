import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_assertEqualsFunctionCustom_TypeTagBigInt =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)("TypeTagBigInt")(
      TypeTagBigInt,
    )((p: (input: TypeTagBigInt) => TypeTagBigInt) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
