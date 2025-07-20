import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_validateEqualsParameters_FunctionalValue =
  (): void =>
    _test_functional_validateEqualsParameters("FunctionalValue")(
      FunctionalValue,
    )((p: (input: FunctionalValue) => FunctionalValue) =>
      typia.functional.validateEqualsParameters(p),
    );
