import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_functional_assertEqualsParametersCustom_TypeTagTypeBigInt =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "TypeTagTypeBigInt",
    )(TypeTagTypeBigInt)((p: (input: TypeTagTypeBigInt) => TypeTagTypeBigInt) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
