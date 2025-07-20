import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_functional_isParameters_DynamicArray = (): void =>
  _test_functional_isParameters("DynamicArray")(DynamicArray)(
    (p: (input: DynamicArray) => DynamicArray) =>
      typia.functional.isParameters(p),
  );
