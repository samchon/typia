import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_validateEqualsFunction_FunctionalPropertyUnion =
  (): void =>
    _test_functional_validateEqualsFunction("FunctionalPropertyUnion")(
      FunctionalPropertyUnion,
    )((p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) =>
      typia.functional.validateEqualsFunction(p),
    );
