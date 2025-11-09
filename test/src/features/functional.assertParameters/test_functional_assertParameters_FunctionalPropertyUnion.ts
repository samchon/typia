import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_assertParameters_FunctionalPropertyUnion =
  (): void =>
    _test_functional_assertParameters(TypeGuardError)(
      "FunctionalPropertyUnion",
    )(FunctionalPropertyUnion)(
      (p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) =>
        typia.functional.assertParameters(p),
    );
