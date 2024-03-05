import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_assertParametersCustom_FunctionalPropertyUnion =
  _test_functional_assertParameters(CustomGuardError)(
    "FunctionalPropertyUnion",
  )(FunctionalPropertyUnion)(
    (p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
