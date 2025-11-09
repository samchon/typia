import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_FunctionalPropertyUnion = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "FunctionalPropertyUnion"
)(FunctionalPropertyUnion)(
  (p: (input: FunctionalPropertyUnion) => FunctionalPropertyUnion) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)