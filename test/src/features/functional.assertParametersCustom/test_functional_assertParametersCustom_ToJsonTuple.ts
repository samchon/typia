import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ToJsonTuple = (): void => _test_functional_assertParameters(CustomGuardError)(
  "ToJsonTuple"
)(ToJsonTuple)(
  (p: (input: ToJsonTuple) => ToJsonTuple) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)