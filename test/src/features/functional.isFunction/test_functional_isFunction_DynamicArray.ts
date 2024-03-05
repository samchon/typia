import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_isFunction_DynamicArray =
  _test_functional_isFunction("DynamicArray")(DynamicArray)(
    (p: (input: DynamicArray) => DynamicArray) =>
      typia.functional.isFunction(p),
  );
