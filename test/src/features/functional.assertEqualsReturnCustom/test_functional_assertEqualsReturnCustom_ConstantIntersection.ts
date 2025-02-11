import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ConstantIntersection = _test_functional_assertEqualsReturn(CustomGuardError)(
  "ConstantIntersection"
)(ConstantIntersection)(
  (p: (input: ConstantIntersection) => ConstantIntersection) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)