import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_isFunction_FunctionalProperty =
  _test_functional_isFunction("FunctionalProperty")(FunctionalProperty)(
    (p: (input: FunctionalProperty) => FunctionalProperty) =>
      typia.functional.isFunction(p),
  );
