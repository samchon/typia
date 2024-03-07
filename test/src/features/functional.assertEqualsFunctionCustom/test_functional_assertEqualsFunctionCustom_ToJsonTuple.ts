import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_ToJsonTuple =
  _test_functional_assertEqualsFunction(CustomGuardError)("ToJsonTuple")(
    ToJsonTuple,
  )((p: (input: ToJsonTuple) => ToJsonTuple) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
