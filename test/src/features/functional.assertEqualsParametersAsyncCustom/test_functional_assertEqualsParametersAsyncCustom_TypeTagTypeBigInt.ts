import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_functional_assertEqualsParametersAsyncCustom_TypeTagTypeBigInt =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "TypeTagTypeBigInt",
  )(TypeTagTypeBigInt)(
    (p: (input: TypeTagTypeBigInt) => Promise<TypeTagTypeBigInt>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
