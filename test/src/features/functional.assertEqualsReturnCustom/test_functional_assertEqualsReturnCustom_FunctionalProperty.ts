import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_FunctionalProperty = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "FunctionalProperty"
)(FunctionalProperty)(
  (p: (input: FunctionalProperty) => FunctionalProperty) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)