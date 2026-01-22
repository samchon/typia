import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_validateEqualsFunction_FunctionalProperty =
  (): void =>
    _test_functional_validateEqualsFunction("FunctionalProperty")(
      FunctionalProperty,
    )((p: (input: FunctionalProperty) => FunctionalProperty) =>
      typia.functional.validateEqualsFunction(p),
    );
