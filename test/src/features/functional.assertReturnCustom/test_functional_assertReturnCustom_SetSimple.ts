import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_assertReturnCustom_SetSimple =
  _test_functional_assertReturn(CustomGuardError)("SetSimple")(SetSimple)(
    (p: (input: SetSimple) => SetSimple) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
