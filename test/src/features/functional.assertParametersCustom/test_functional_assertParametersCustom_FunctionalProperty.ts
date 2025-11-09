import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_FunctionalProperty = (): void => _test_functional_assertParameters(CustomGuardError)(
  "FunctionalProperty"
)(FunctionalProperty)(
  (p: (input: FunctionalProperty) => FunctionalProperty) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)