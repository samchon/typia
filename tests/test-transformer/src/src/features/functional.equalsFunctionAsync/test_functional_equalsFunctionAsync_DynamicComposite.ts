import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_equalsFunctionAsync_DynamicComposite = (): Promise<void> => _test_functional_equalsFunctionAsync(
  "DynamicComposite"
)(DynamicComposite)(
  (p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
    typia.functional.equalsFunction(p),
)