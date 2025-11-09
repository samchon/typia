import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ToJsonUnion = (): void => _test_functional_assertParameters(CustomGuardError)(
  "ToJsonUnion"
)(ToJsonUnion)(
  (p: (input: ToJsonUnion) => ToJsonUnion) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)