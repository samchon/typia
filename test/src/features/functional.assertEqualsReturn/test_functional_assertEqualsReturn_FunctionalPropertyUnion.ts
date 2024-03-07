import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_FunctionalPropertyUnion =
  _test_functional_assertEqualsReturn(TypeGuardError)(
    "FunctionalPropertyUnion",
  )(FunctionalPropertyUnion)(
    (p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) =>
      typia.functional.assertEqualsReturn(p),
  );
