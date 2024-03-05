import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_validateFunction_FunctionalPropertyUnion =
  _test_functional_validateFunction("FunctionalPropertyUnion")(
    FunctionalPropertyUnion,
  )((p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) =>
    typia.functional.validateFunction(p),
  );
