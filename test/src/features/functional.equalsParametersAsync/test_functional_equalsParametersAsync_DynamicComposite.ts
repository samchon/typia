import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_equalsParametersAsync_DynamicComposite =
  _test_functional_equalsParametersAsync("DynamicComposite")(DynamicComposite)(
    (p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
      typia.functional.equalsParameters(p),
  );
