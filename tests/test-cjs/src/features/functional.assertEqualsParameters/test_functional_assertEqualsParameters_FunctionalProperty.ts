import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_assertEqualsParameters_FunctionalProperty =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "FunctionalProperty",
    )(FunctionalProperty)(
      (p: (input: FunctionalProperty) => FunctionalProperty) =>
        typia.functional.assertEqualsParameters(p),
    );
