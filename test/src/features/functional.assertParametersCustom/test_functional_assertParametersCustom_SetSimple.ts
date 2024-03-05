import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_assertParametersCustom_SetSimple =
  _test_functional_assertParameters(CustomGuardError)("SetSimple")(SetSimple)(
    (p: (input: SetSimple) => SetSimple) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
