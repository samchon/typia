import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_assertEqualsParametersCustom_FunctionalValueUnion =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "FunctionalValueUnion",
    )(FunctionalValueUnion)(
      (p: (input: FunctionalValueUnion) => FunctionalValueUnion) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
