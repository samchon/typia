import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_validateReturn_TypeTagBigInt = (): void =>
  _test_functional_validateReturn("TypeTagBigInt")(TypeTagBigInt)(
    (p: (input: TypeTagBigInt) => TypeTagBigInt) =>
      typia.functional.validateReturn(p),
  );
