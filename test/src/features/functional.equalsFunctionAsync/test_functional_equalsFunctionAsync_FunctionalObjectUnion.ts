import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_equalsFunctionAsync_FunctionalObjectUnion =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("FunctionalObjectUnion")(
      FunctionalObjectUnion,
    )((p: (input: FunctionalObjectUnion) => Promise<FunctionalObjectUnion>) =>
      typia.functional.equalsFunction(p),
    );
