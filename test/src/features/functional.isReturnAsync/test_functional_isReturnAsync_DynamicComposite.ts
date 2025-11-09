import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_isReturnAsync_DynamicComposite = (): Promise<void> => _test_functional_isReturnAsync(
  "DynamicComposite"
)(DynamicComposite)(
  (p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
    typia.functional.isReturn(p),
)