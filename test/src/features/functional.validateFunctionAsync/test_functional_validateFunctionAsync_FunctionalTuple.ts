import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_validateFunctionAsync_FunctionalTuple =
  _test_functional_validateFunctionAsync("FunctionalTuple")(FunctionalTuple)(
    (p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
      typia.functional.validateFunction(p),
  );
