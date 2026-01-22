import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_assertFunction_SetSimple = (): void =>
  _test_functional_assertFunction(TypeGuardError)("SetSimple")(SetSimple)(
    (p: (input: SetSimple) => SetSimple) => typia.functional.assertFunction(p),
  );
