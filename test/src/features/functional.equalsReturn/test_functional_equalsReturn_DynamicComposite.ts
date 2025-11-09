import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_equalsReturn_DynamicComposite = (): void => _test_functional_equalsReturn(
  "DynamicComposite"
)(DynamicComposite)(
  (p: (input: DynamicComposite) => DynamicComposite) => typia.functional.equalsReturn(p),
)