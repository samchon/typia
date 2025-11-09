import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagTypeBigInt =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "TypeTagTypeBigInt",
    )(TypeTagTypeBigInt)(
      (p: (input: TypeTagTypeBigInt) => Promise<TypeTagTypeBigInt>) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
