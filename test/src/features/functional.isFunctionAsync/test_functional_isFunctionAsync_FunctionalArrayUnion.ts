import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_isFunctionAsync_FunctionalArrayUnion =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("FunctionalArrayUnion")(
      FunctionalArrayUnion,
    )((p: (input: FunctionalArrayUnion) => Promise<FunctionalArrayUnion>) =>
      typia.functional.isFunction(p),
    );
