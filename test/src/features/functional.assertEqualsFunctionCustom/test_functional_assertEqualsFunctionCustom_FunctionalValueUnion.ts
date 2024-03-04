import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_assertEqualsFunctionCustom_FunctionalValueUnion =
  _test_functional_assertEqualsFunction(CustomGuardError)(
    "FunctionalValueUnion",
  )(FunctionalValueUnion)(
    (p: (input: FunctionalValueUnion) => FunctionalValueUnion) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
