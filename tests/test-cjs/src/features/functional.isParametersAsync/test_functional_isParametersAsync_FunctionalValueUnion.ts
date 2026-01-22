import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_isParametersAsync_FunctionalValueUnion =
  (): Promise<void> =>
    _test_functional_isParametersAsync("FunctionalValueUnion")(
      FunctionalValueUnion,
    )((p: (input: FunctionalValueUnion) => Promise<FunctionalValueUnion>) =>
      typia.functional.isParameters(p),
    );
