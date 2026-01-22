import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_assertFunctionAsync_TypeTagBigInt =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("TypeTagBigInt")(
      TypeTagBigInt,
    )((p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
      typia.functional.assertFunction(p),
    );
