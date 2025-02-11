import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { UltimateUnion } from "../../structures/UltimateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_UltimateUnion = _test_functional_assertReturn(CustomGuardError)(
  "UltimateUnion"
)(UltimateUnion)(
  (p: (input: UltimateUnion) => UltimateUnion) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)