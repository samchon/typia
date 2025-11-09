import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_assertParametersAsync_TypeTagBigInt =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("TypeTagBigInt")(
      TypeTagBigInt,
    )((p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
      typia.functional.assertParameters(p),
    );
