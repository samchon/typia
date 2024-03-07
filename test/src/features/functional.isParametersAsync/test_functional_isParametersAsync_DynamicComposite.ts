import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_isParametersAsync_DynamicComposite =
  _test_functional_isParametersAsync("DynamicComposite")(DynamicComposite)(
    (p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
      typia.functional.isParameters(p),
  );
