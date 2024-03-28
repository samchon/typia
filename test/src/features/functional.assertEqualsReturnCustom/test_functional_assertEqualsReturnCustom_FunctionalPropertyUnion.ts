import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_assertEqualsReturnCustom_FunctionalPropertyUnion =
  _test_functional_assertEqualsReturn(CustomGuardError)(
    "FunctionalPropertyUnion",
  )(FunctionalPropertyUnion)(
    (p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
