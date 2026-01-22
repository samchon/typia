import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_validateParametersAsync_FunctionalTuple =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("FunctionalTuple")(
      FunctionalTuple,
    )((p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
      typia.functional.validateParameters(p),
    );
