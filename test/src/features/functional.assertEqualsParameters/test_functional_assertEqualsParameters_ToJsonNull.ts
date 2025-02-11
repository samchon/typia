import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_assertEqualsParameters_ToJsonNull =
  _test_functional_assertEqualsParameters(TypeGuardError)("ToJsonNull")(
    ToJsonNull,
  )((p: (input: ToJsonNull) => ToJsonNull) =>
    typia.functional.assertEqualsParameters(p),
  );
