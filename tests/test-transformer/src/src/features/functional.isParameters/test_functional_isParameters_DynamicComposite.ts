import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_isParameters_DynamicComposite = (): void => _test_functional_isParameters(
  "DynamicComposite"
)(DynamicComposite)(
  (p: (input: DynamicComposite) => DynamicComposite) => typia.functional.isParameters(p),
)