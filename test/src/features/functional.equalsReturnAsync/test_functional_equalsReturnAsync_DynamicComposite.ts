import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_equalsReturnAsync_DynamicComposite =
  _test_functional_equalsReturnAsync("DynamicComposite")(DynamicComposite)(
    (p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
      typia.functional.equalsReturn(p),
  );
