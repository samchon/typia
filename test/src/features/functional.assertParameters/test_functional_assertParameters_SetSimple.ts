import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_assertParameters_SetSimple =
  _test_functional_assertParameters(TypeGuardError)("SetSimple")(SetSimple)(
    (p: (input: SetSimple) => SetSimple) =>
      typia.functional.assertParameters(p),
  );
