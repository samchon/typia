import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_equalsFunctionAsync_FunctionalProperty =
  _test_functional_equalsFunctionAsync("FunctionalProperty")(
    FunctionalProperty,
  )((p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
    typia.functional.equalsFunction(p),
  );
