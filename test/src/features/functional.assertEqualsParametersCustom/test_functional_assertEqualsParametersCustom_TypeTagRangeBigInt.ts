import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_TypeTagRangeBigInt =
  _test_functional_assertEqualsParameters(CustomGuardError)(
    "TypeTagRangeBigInt",
  )(TypeTagRangeBigInt)(
    (p: (input: TypeTagRangeBigInt) => TypeTagRangeBigInt) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
