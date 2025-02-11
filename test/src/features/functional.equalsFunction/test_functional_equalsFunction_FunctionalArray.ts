import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_equalsFunction_FunctionalArray =
  _test_functional_equalsFunction("FunctionalArray")(FunctionalArray)(
    (p: (input: FunctionalArray) => FunctionalArray) =>
      typia.functional.equalsFunction(p),
  );
