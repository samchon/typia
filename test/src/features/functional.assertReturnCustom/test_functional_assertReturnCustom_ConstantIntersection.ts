import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ConstantIntersection = (): void => _test_functional_assertReturn(CustomGuardError)(
  "ConstantIntersection"
)(ConstantIntersection)(
  (p: (input: ConstantIntersection) => ConstantIntersection) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)