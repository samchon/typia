import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_TypeTagTypeBigInt =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "TypeTagTypeBigInt",
  )(TypeTagTypeBigInt)(
    (p: (input: TypeTagTypeBigInt) => Promise<TypeTagTypeBigInt>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
