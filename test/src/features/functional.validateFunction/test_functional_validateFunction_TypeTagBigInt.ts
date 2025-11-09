import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_validateFunction_TypeTagBigInt = (): void =>
  _test_functional_validateFunction("TypeTagBigInt")(TypeTagBigInt)(
    (p: (input: TypeTagBigInt) => TypeTagBigInt) =>
      typia.functional.validateFunction(p),
  );
