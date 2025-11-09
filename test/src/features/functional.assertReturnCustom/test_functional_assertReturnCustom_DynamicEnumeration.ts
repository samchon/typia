import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_DynamicEnumeration = (): void => _test_functional_assertReturn(CustomGuardError)(
  "DynamicEnumeration"
)(DynamicEnumeration)(
  (p: (input: DynamicEnumeration) => DynamicEnumeration) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)