import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_validateFunction_DynamicArray = (): void =>
  _test_functional_validateFunction("DynamicArray")(DynamicArray)(
    (p: (input: DynamicArray) => DynamicArray) =>
      typia.functional.validateFunction(p),
  );
