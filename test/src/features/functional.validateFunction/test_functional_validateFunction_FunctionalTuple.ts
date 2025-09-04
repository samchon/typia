import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_validateFunction_FunctionalTuple = (): void =>
  _test_functional_validateFunction("FunctionalTuple")(FunctionalTuple)(
    (p: (input: FunctionalTuple) => FunctionalTuple) =>
      typia.functional.validateFunction(p),
  );
