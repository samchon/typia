import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_assertFunctionCustom_FunctionalPropertyUnion =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)(
      "FunctionalPropertyUnion",
    )(FunctionalPropertyUnion)(
      (p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) =>
        typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
