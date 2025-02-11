import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_assertEqualsReturn_ToJsonNull =
  _test_functional_assertEqualsReturn(TypeGuardError)("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => ToJsonNull) =>
      typia.functional.assertEqualsReturn(p),
  );
