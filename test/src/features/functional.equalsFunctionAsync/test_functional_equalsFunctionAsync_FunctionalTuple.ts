import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_equalsFunctionAsync_FunctionalTuple =
  _test_functional_equalsFunctionAsync("FunctionalTuple")(FunctionalTuple)(
    (p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
      typia.functional.equalsFunction(p),
  );
