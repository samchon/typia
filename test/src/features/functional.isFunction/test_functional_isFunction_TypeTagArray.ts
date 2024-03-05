import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_functional_isFunction_TypeTagArray =
  _test_functional_isFunction("TypeTagArray")(TypeTagArray)(
    (p: (input: TypeTagArray) => TypeTagArray) =>
      typia.functional.isFunction(p),
  );
