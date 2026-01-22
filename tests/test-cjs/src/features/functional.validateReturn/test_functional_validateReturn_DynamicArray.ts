import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_validateReturn_DynamicArray = (): void =>
  _test_functional_validateReturn("DynamicArray")(DynamicArray)(
    (p: (input: DynamicArray) => DynamicArray) =>
      typia.functional.validateReturn(p),
  );
