import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_DynamicComposite = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "DynamicComposite"
)(DynamicComposite)(
  (p: (input: DynamicComposite) => DynamicComposite) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)