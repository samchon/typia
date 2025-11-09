import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_assertReturn_ToJsonNull = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => ToJsonNull) => typia.functional.assertReturn(p),
  );
