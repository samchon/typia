import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_validateEqualsParametersAsync_DynamicComposite = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "DynamicComposite"
)(DynamicComposite)(
  (p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
    typia.functional.validateEqualsParameters(p),
)