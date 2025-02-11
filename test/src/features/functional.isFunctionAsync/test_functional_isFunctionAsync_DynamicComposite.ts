import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_isFunctionAsync_DynamicComposite = _test_functional_isFunctionAsync(
  "DynamicComposite"
)(DynamicComposite)(
  (p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
    typia.functional.isFunction(p),
)