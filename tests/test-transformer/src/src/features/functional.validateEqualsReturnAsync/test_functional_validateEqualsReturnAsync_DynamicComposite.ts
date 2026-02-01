import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_validateEqualsReturnAsync_DynamicComposite = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "DynamicComposite"
)(DynamicComposite)(
  (p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
    typia.functional.validateEqualsReturn(p),
)