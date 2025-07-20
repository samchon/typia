import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_validateFunction_ArraySimple = (): void =>
  _test_functional_validateFunction("ArraySimple")(ArraySimple)(
    (p: (input: ArraySimple) => ArraySimple) =>
      typia.functional.validateFunction(p),
  );
