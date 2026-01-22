import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_equalsFunctionAsync_FunctionalPropertyUnion =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("FunctionalPropertyUnion")(
      FunctionalPropertyUnion,
    )(
      (
        p: (input: FunctionalPropertyUnion) => Promise<FunctionalPropertyUnion>,
      ) => typia.functional.equalsFunction(p),
    );
