import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_validateFunctionAsync_FunctionalValueUnion =
  _test_functional_validateFunctionAsync("FunctionalValueUnion")(
    FunctionalValueUnion,
  )((p: (input: FunctionalValueUnion) => Promise<FunctionalValueUnion>) =>
    typia.functional.validateFunction(p),
  );
