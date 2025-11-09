import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_ToJsonUnion = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "ToJsonUnion"
)(ToJsonUnion)(
  (p: (input: ToJsonUnion) => ToJsonUnion) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)