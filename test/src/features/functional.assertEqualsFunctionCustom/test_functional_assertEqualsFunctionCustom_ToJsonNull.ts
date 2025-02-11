import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_assertEqualsFunctionCustom_ToJsonNull =
  _test_functional_assertEqualsFunction(CustomGuardError)("ToJsonNull")(
    ToJsonNull,
  )((p: (input: ToJsonNull) => ToJsonNull) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
