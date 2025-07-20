import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_functional_validateEqualsFunction_TypeTagTypeBigInt =
  (): void =>
    _test_functional_validateEqualsFunction("TypeTagTypeBigInt")(
      TypeTagTypeBigInt,
    )((p: (input: TypeTagTypeBigInt) => TypeTagTypeBigInt) =>
      typia.functional.validateEqualsFunction(p),
    );
