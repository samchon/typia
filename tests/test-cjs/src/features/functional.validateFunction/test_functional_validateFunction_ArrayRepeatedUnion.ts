import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_functional_validateFunction_ArrayRepeatedUnion = (): void =>
  _test_functional_validateFunction("ArrayRepeatedUnion")(ArrayRepeatedUnion)(
    (p: (input: ArrayRepeatedUnion) => ArrayRepeatedUnion) =>
      typia.functional.validateFunction(p),
  );
