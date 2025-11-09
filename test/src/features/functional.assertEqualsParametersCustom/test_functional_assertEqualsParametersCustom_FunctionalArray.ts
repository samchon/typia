import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_assertEqualsParametersCustom_FunctionalArray =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "FunctionalArray",
    )(FunctionalArray)((p: (input: FunctionalArray) => FunctionalArray) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
