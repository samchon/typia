import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_isFunctionAsync_TypeTagBigInt =
  _test_functional_isFunctionAsync("TypeTagBigInt")(TypeTagBigInt)(
    (p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
      typia.functional.isFunction(p),
  );
