import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_TypeTagTypeBigInt =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "TypeTagTypeBigInt",
  )(TypeTagTypeBigInt)(
    (p: (input: TypeTagTypeBigInt) => Promise<TypeTagTypeBigInt>) =>
      typia.functional.assertEqualsParameters(p),
  );
