import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_assertEqualsReturn_FunctionalPropertyUnion =
  (): void =>
    _test_functional_assertEqualsReturn(TypeGuardError)(
      "FunctionalPropertyUnion",
    )(FunctionalPropertyUnion)(
      (p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) =>
        typia.functional.assertEqualsReturn(p),
    );
