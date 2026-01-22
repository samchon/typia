import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_assertEqualsParametersCustom_ToJsonDouble =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)("ToJsonDouble")(
      ToJsonDouble,
    )((p: (input: ToJsonDouble) => ToJsonDouble) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
