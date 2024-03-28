import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_functional_assertEqualsFunctionAsync_TypeTagTypeBigInt =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "TypeTagTypeBigInt",
  )(TypeTagTypeBigInt)(
    (p: (input: TypeTagTypeBigInt) => Promise<TypeTagTypeBigInt>) =>
      typia.functional.assertEqualsFunction(p),
  );
