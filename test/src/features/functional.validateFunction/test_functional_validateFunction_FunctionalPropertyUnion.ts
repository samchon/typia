import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_validateFunction_FunctionalPropertyUnion =
  (): void =>
    _test_functional_validateFunction("FunctionalPropertyUnion")(
      FunctionalPropertyUnion,
    )((p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) =>
      typia.functional.validateFunction(p),
    );
