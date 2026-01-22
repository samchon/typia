import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_assertEqualsParametersAsync_TypeTagBigInt =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "TypeTagBigInt",
    )(TypeTagBigInt)((p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
      typia.functional.assertEqualsParameters(p),
    );
