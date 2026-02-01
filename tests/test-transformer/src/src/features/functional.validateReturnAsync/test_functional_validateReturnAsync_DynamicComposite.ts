import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_validateReturnAsync_DynamicComposite = (): Promise<void> => _test_functional_validateReturnAsync(
  "DynamicComposite"
)(DynamicComposite)(
  (p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
    typia.functional.validateReturn(p),
)