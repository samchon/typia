import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_isFunctionAsync_FunctionalValueUnion =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("FunctionalValueUnion")(
      FunctionalValueUnion,
    )((p: (input: FunctionalValueUnion) => Promise<FunctionalValueUnion>) =>
      typia.functional.isFunction(p),
    );
