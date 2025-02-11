import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicTree } from "../../structures/DynamicTree";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_DynamicTree = _test_functional_assertReturn(CustomGuardError)(
  "DynamicTree"
)(DynamicTree)(
  (p: (input: DynamicTree) => DynamicTree) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)