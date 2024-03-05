import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_functional_validateEqualsReturn_TypeTagTypeBigInt =
  _test_functional_validateEqualsReturn("TypeTagTypeBigInt")(TypeTagTypeBigInt)(
    (p: (input: TypeTagTypeBigInt) => TypeTagTypeBigInt) =>
      typia.functional.validateEqualsReturn(p),
  );
