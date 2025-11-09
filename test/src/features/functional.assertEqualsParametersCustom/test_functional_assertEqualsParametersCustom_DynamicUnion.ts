import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_DynamicUnion = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "DynamicUnion"
)(DynamicUnion)(
  (p: (input: DynamicUnion) => DynamicUnion) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)