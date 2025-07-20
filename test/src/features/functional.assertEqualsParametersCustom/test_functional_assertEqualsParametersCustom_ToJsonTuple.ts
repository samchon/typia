import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_assertEqualsParametersCustom_ToJsonTuple =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)("ToJsonTuple")(
      ToJsonTuple,
    )((p: (input: ToJsonTuple) => ToJsonTuple) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
