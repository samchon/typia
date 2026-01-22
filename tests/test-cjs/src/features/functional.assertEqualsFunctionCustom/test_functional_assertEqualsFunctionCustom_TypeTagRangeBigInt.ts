import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_assertEqualsFunctionCustom_TypeTagRangeBigInt =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)(
      "TypeTagRangeBigInt",
    )(TypeTagRangeBigInt)(
      (p: (input: TypeTagRangeBigInt) => TypeTagRangeBigInt) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
