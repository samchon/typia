import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_assertParameters_ToJsonNull =
  _test_functional_assertParameters(TypeGuardError)("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => ToJsonNull) =>
      typia.functional.assertParameters(p),
  );
