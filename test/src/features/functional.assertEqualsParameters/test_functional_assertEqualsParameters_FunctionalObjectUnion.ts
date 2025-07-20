import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_assertEqualsParameters_FunctionalObjectUnion =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "FunctionalObjectUnion",
    )(FunctionalObjectUnion)(
      (p: (input: FunctionalObjectUnion) => FunctionalObjectUnion) =>
        typia.functional.assertEqualsParameters(p),
    );
