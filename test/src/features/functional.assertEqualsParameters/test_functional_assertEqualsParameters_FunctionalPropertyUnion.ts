import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_assertEqualsParameters_FunctionalPropertyUnion =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "FunctionalPropertyUnion",
    )(FunctionalPropertyUnion)(
      (p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) =>
        typia.functional.assertEqualsParameters(p),
    );
