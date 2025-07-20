import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_validateReturnAsync_FunctionalTuple =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("FunctionalTuple")(FunctionalTuple)(
      (p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
        typia.functional.validateReturn(p),
    );
