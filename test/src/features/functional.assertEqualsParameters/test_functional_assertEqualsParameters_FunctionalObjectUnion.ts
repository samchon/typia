import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_FunctionalObjectUnion =
  _test_functional_assertEqualsParameters(TypeGuardError)(
    "FunctionalObjectUnion",
  )(FunctionalObjectUnion)(
    (p: (input: FunctionalObjectUnion) => FunctionalObjectUnion) =>
      typia.functional.assertEqualsParameters(p),
  );
