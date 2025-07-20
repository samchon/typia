import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_functional_isFunction_TypeTagTypeBigInt = (): void =>
  _test_functional_isFunction("TypeTagTypeBigInt")(TypeTagTypeBigInt)(
    (p: (input: TypeTagTypeBigInt) => TypeTagTypeBigInt) =>
      typia.functional.isFunction(p),
  );
