import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_assertEqualsFunction_FunctionalPropertyUnion =
  _test_functional_assertEqualsFunction(TypeGuardError)(
    "FunctionalPropertyUnion",
  )(FunctionalPropertyUnion)(
    (p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) =>
      typia.functional.assertEqualsFunction(p),
  );
