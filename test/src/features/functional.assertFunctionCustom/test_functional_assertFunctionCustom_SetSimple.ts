import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { SetSimple } from "../../structures/SetSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_SetSimple =
  _test_functional_assertFunction(CustomGuardError)("SetSimple")(SetSimple)(
    (p: (input: SetSimple) => SetSimple) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
