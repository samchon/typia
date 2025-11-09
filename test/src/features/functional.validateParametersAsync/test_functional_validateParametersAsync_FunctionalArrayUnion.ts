import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_validateParametersAsync_FunctionalArrayUnion =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("FunctionalArrayUnion")(
      FunctionalArrayUnion,
    )((p: (input: FunctionalArrayUnion) => Promise<FunctionalArrayUnion>) =>
      typia.functional.validateParameters(p),
    );
