import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_functional_validateEqualsFunction_ArrayUnion = (): void =>
  _test_functional_validateEqualsFunction("ArrayUnion")(ArrayUnion)(
    (p: (input: ArrayUnion) => ArrayUnion) =>
      typia.functional.validateEqualsFunction(p),
  );
