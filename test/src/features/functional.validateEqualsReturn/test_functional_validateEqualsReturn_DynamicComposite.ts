import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_validateEqualsReturn_DynamicComposite = (): void => _test_functional_validateEqualsReturn(
  "DynamicComposite"
)(DynamicComposite)(
  (p: (input: DynamicComposite) => DynamicComposite) => typia.functional.validateEqualsReturn(p),
)