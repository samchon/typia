import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_assertParametersCustom_ToJsonDouble = (): void =>
  _test_functional_assertParameters(CustomGuardError)("ToJsonDouble")(
    ToJsonDouble,
  )((p: (input: ToJsonDouble) => ToJsonDouble) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
