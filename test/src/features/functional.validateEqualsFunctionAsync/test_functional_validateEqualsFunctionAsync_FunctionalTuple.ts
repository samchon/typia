import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_validateEqualsFunctionAsync_FunctionalTuple =
  _test_functional_validateEqualsFunctionAsync("FunctionalTuple")(
    FunctionalTuple,
  )((p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
    typia.functional.validateEqualsFunction(p),
  );
