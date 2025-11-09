import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_validateEqualsParameters_FunctionalProperty =
  (): void =>
    _test_functional_validateEqualsParameters("FunctionalProperty")(
      FunctionalProperty,
    )((p: (input: FunctionalProperty) => FunctionalProperty) =>
      typia.functional.validateEqualsParameters(p),
    );
