import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_assertEqualsParameters_TypeTagRangeBigInt =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "TypeTagRangeBigInt",
    )(TypeTagRangeBigInt)(
      (p: (input: TypeTagRangeBigInt) => TypeTagRangeBigInt) =>
        typia.functional.assertEqualsParameters(p),
    );
