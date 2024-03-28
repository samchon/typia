import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_assertReturn_SetSimple =
  _test_functional_assertReturn(TypeGuardError)("SetSimple")(SetSimple)(
    (p: (input: SetSimple) => SetSimple) => typia.functional.assertReturn(p),
  );
