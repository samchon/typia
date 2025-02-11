import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_isParametersAsync_FunctionalTuple =
  _test_functional_isParametersAsync("FunctionalTuple")(FunctionalTuple)(
    (p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
      typia.functional.isParameters(p),
  );
