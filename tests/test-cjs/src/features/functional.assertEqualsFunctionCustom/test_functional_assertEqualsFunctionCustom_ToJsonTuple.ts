import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_assertEqualsFunctionCustom_ToJsonTuple =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)("ToJsonTuple")(
      ToJsonTuple,
    )((p: (input: ToJsonTuple) => ToJsonTuple) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
