import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_functional_assertEqualsParametersCustom_ToJsonArray =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)("ToJsonArray")(
      ToJsonArray,
    )((p: (input: ToJsonArray) => ToJsonArray) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
