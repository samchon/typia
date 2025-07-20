import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_functional_equalsFunction_ArraySimple = (): void =>
  _test_functional_equalsFunction("ArraySimple")(ArraySimple)(
    (p: (input: ArraySimple) => ArraySimple) =>
      typia.functional.equalsFunction(p),
  );
