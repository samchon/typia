import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_isFunctionAsync_TypeTagArray = (): Promise<void> =>
  _test_functional_isFunctionAsync("TypeTagArray")(TypeTagArray)(
    (p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
      typia.functional.isFunction(p),
  );
