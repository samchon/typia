import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_isFunction_FunctionalTuple = (): void =>
  _test_functional_isFunction("FunctionalTuple")(FunctionalTuple)(
    (p: (input: FunctionalTuple) => FunctionalTuple) =>
      typia.functional.isFunction(p),
  );
