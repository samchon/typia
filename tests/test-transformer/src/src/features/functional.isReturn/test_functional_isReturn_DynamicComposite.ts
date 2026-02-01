import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_isReturn_DynamicComposite = (): void => _test_functional_isReturn(
  "DynamicComposite"
)(DynamicComposite)(
  (p: (input: DynamicComposite) => DynamicComposite) => typia.functional.isReturn(p),
)