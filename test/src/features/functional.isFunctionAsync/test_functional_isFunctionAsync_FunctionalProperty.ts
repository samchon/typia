import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_isFunctionAsync_FunctionalProperty =
  _test_functional_isFunctionAsync("FunctionalProperty")(FunctionalProperty)(
    (p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
      typia.functional.isFunction(p),
  );
