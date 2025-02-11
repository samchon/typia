import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_validateEqualsFunctionAsync_DynamicComposite = _test_functional_validateEqualsFunctionAsync(
  "DynamicComposite"
)(DynamicComposite)(
  (p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
    typia.functional.validateEqualsFunction(p),
)