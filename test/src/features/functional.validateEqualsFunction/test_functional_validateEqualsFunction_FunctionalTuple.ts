import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_validateEqualsFunction_FunctionalTuple =
  (): void =>
    _test_functional_validateEqualsFunction("FunctionalTuple")(FunctionalTuple)(
      (p: (input: FunctionalTuple) => FunctionalTuple) =>
        typia.functional.validateEqualsFunction(p),
    );
