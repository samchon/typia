import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_FunctionalTuple = (): void => _test_functional_assertReturn(CustomGuardError)(
  "FunctionalTuple"
)(FunctionalTuple)(
  (p: (input: FunctionalTuple) => FunctionalTuple) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)