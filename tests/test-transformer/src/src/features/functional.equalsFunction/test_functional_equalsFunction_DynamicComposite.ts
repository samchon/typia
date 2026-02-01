import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_equalsFunction_DynamicComposite = (): void => _test_functional_equalsFunction(
  "DynamicComposite"
)(DynamicComposite)(
  (p: (input: DynamicComposite) => DynamicComposite) => typia.functional.equalsFunction(p),
)