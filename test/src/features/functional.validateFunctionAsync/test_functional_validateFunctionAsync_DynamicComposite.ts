import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_validateFunctionAsync_DynamicComposite =
  _test_functional_validateFunctionAsync("DynamicComposite")(DynamicComposite)(
    (p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
      typia.functional.validateFunction(p),
  );
