import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_isReturn_TypeTagBigInt = (): void =>
  _test_functional_isReturn("TypeTagBigInt")(TypeTagBigInt)(
    (p: (input: TypeTagBigInt) => TypeTagBigInt) =>
      typia.functional.isReturn(p),
  );
