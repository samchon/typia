import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagBigInt =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "TypeTagBigInt",
    )(TypeTagBigInt)((p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
