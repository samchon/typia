import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicTag } from "../../structures/DynamicTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_DynamicTag = _test_functional_assertReturn(CustomGuardError)(
  "DynamicTag"
)(DynamicTag)(
  (p: (input: DynamicTag) => DynamicTag) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)