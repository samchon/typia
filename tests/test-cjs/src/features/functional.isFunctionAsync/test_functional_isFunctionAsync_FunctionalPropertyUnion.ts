import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_isFunctionAsync_FunctionalPropertyUnion =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("FunctionalPropertyUnion")(
      FunctionalPropertyUnion,
    )(
      (
        p: (input: FunctionalPropertyUnion) => Promise<FunctionalPropertyUnion>,
      ) => typia.functional.isFunction(p),
    );
