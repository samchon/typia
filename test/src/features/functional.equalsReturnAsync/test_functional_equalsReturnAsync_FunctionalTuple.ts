import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_equalsReturnAsync_FunctionalTuple =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("FunctionalTuple")(FunctionalTuple)(
      (p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
        typia.functional.equalsReturn(p),
    );
