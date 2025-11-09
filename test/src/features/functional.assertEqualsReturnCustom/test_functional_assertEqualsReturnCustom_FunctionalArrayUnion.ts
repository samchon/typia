import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_FunctionalArrayUnion = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "FunctionalArrayUnion"
)(FunctionalArrayUnion)(
  (p: (input: FunctionalArrayUnion) => FunctionalArrayUnion) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)