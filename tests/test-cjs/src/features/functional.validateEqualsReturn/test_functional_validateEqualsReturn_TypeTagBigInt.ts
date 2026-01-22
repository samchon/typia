import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_validateEqualsReturn_TypeTagBigInt = (): void =>
  _test_functional_validateEqualsReturn("TypeTagBigInt")(TypeTagBigInt)(
    (p: (input: TypeTagBigInt) => TypeTagBigInt) =>
      typia.functional.validateEqualsReturn(p),
  );
