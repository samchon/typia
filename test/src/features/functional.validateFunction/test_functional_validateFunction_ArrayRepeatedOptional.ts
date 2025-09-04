import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_functional_validateFunction_ArrayRepeatedOptional =
  (): void =>
    _test_functional_validateFunction("ArrayRepeatedOptional")(
      ArrayRepeatedOptional,
    )((p: (input: ArrayRepeatedOptional) => ArrayRepeatedOptional) =>
      typia.functional.validateFunction(p),
    );
