import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_FunctionalArrayUnion =
  _test_functional_assertEqualsParameters(TypeGuardError)(
    "FunctionalArrayUnion",
  )(FunctionalArrayUnion)(
    (p: (input: FunctionalArrayUnion) => FunctionalArrayUnion) =>
      typia.functional.assertEqualsParameters(p),
  );
