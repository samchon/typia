import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_assertEqualsFunction_ToJsonNull =
  _test_functional_assertEqualsFunction(TypeGuardError)("ToJsonNull")(
    ToJsonNull,
  )((p: (input: ToJsonNull) => ToJsonNull) =>
    typia.functional.assertEqualsFunction(p),
  );
