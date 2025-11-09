import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicTree } from "../../structures/DynamicTree";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_DynamicTree = (): void => _test_functional_assertParameters(CustomGuardError)(
  "DynamicTree"
)(DynamicTree)(
  (p: (input: DynamicTree) => DynamicTree) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)