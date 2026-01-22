import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_isParameters_TypeTagBigInt = (): void =>
  _test_functional_isParameters("TypeTagBigInt")(TypeTagBigInt)(
    (p: (input: TypeTagBigInt) => TypeTagBigInt) =>
      typia.functional.isParameters(p),
  );
