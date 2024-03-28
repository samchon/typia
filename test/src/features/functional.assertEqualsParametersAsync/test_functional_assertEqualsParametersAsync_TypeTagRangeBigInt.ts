import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_assertEqualsParametersAsync_TypeTagRangeBigInt =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "TypeTagRangeBigInt",
  )(TypeTagRangeBigInt)(
    (p: (input: TypeTagRangeBigInt) => Promise<TypeTagRangeBigInt>) =>
      typia.functional.assertEqualsParameters(p),
  );
