import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_functional_validateFunction_ArrayRepeatedRequired =
  (): void =>
    _test_functional_validateFunction("ArrayRepeatedRequired")(
      ArrayRepeatedRequired,
    )((p: (input: ArrayRepeatedRequired) => ArrayRepeatedRequired) =>
      typia.functional.validateFunction(p),
    );
