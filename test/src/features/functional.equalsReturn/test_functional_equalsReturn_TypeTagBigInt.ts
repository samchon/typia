import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_equalsReturn_TypeTagBigInt = (): void =>
  _test_functional_equalsReturn("TypeTagBigInt")(TypeTagBigInt)(
    (p: (input: TypeTagBigInt) => TypeTagBigInt) =>
      typia.functional.equalsReturn(p),
  );
