import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_validateParametersAsync_FunctionalValueUnion =
  _test_functional_validateParametersAsync("FunctionalValueUnion")(
    FunctionalValueUnion,
  )((p: (input: FunctionalValueUnion) => Promise<FunctionalValueUnion>) =>
    typia.functional.validateParameters(p),
  );
