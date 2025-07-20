import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_validateFunctionAsync_TypeTagBigInt =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("TypeTagBigInt")(TypeTagBigInt)(
      (p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
        typia.functional.validateFunction(p),
    );
