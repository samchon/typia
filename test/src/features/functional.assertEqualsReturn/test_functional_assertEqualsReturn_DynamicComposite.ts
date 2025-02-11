import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { DynamicComposite } from "../../structures/DynamicComposite";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_DynamicComposite = _test_functional_assertEqualsReturn(TypeGuardError)(
  "DynamicComposite"
)(DynamicComposite)(
  (p: (input: DynamicComposite) => DynamicComposite) => typia.functional.assertEqualsReturn(p),
)