import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicTree } from "../../structures/DynamicTree";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_DynamicTree = _test_functional_assertParameters(TypeGuardError)(
  "DynamicTree"
)(DynamicTree)(
  (p: (input: DynamicTree) => DynamicTree) => typia.functional.assertParameters(p),
)