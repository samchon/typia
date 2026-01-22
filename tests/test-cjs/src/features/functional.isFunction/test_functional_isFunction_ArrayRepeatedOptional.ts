import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_functional_isFunction_ArrayRepeatedOptional = (): void =>
  _test_functional_isFunction("ArrayRepeatedOptional")(ArrayRepeatedOptional)(
    (p: (input: ArrayRepeatedOptional) => ArrayRepeatedOptional) =>
      typia.functional.isFunction(p),
  );
