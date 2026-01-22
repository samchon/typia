import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertEqualsReturnCustom_FunctionalTuple =
  (): void =>
    _test_functional_assertEqualsReturn(CustomGuardError)("FunctionalTuple")(
      FunctionalTuple,
    )((p: (input: FunctionalTuple) => FunctionalTuple) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
