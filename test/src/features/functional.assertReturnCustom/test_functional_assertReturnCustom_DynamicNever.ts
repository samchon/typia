import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicNever } from "../../structures/DynamicNever";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_DynamicNever = _test_functional_assertReturn(CustomGuardError)(
  "DynamicNever"
)(DynamicNever)(
  (p: (input: DynamicNever) => DynamicNever) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)