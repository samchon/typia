import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicTag } from "../../structures/DynamicTag";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_DynamicTag = _test_functional_assertFunction(TypeGuardError)(
  "DynamicTag"
)(DynamicTag)(
  (p: (input: DynamicTag) => DynamicTag) => typia.functional.assertFunction(p),
)