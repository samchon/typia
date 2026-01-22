import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_validateFunction_ArrayUnion = (): void =>
  _test_functional_validateFunction("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => ArrayUnion) =>
      typia.functional.validateFunction(p),
  );
