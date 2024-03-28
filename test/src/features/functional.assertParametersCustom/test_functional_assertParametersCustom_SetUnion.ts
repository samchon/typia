import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_assertParametersCustom_SetUnion =
  _test_functional_assertParameters(CustomGuardError)("SetUnion")(SetUnion)(
    (p: (input: SetUnion) => SetUnion) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
