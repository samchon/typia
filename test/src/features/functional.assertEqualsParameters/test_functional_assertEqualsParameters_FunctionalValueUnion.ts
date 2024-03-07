import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_FunctionalValueUnion =
  _test_functional_assertEqualsParameters(TypeGuardError)(
    "FunctionalValueUnion",
  )(FunctionalValueUnion)(
    (p: (input: FunctionalValueUnion) => FunctionalValueUnion) =>
      typia.functional.assertEqualsParameters(p),
  );
