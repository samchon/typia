import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_isReturnAsync_FunctionalProperty =
  _test_functional_isReturnAsync("FunctionalProperty")(FunctionalProperty)(
    (p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
      typia.functional.isReturn(p),
  );
