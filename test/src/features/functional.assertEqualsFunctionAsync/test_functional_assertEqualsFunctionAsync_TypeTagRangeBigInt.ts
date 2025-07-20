import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_assertEqualsFunctionAsync_TypeTagRangeBigInt =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "TypeTagRangeBigInt",
    )(TypeTagRangeBigInt)(
      (p: (input: TypeTagRangeBigInt) => Promise<TypeTagRangeBigInt>) =>
        typia.functional.assertEqualsFunction(p),
    );
