import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_assertEqualsParametersCustom_FunctionalObjectUnion =
  _test_functional_assertEqualsParameters(CustomGuardError)(
    "FunctionalObjectUnion",
  )(FunctionalObjectUnion)(
    (p: (input: FunctionalObjectUnion) => FunctionalObjectUnion) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
