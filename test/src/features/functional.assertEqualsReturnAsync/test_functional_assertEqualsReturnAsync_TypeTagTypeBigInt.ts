import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_functional_assertEqualsReturnAsync_TypeTagTypeBigInt =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "TypeTagTypeBigInt",
    )(TypeTagTypeBigInt)(
      (p: (input: TypeTagTypeBigInt) => Promise<TypeTagTypeBigInt>) =>
        typia.functional.assertEqualsReturn(p),
    );
