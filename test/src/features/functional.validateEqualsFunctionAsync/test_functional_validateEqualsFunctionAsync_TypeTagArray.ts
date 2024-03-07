import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_validateEqualsFunctionAsync_TypeTagArray =
  _test_functional_validateEqualsFunctionAsync("TypeTagArray")(TypeTagArray)(
    (p: (input: TypeTagArray) => Promise<TypeTagArray>) =>
      typia.functional.validateEqualsFunction(p),
  );
