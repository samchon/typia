import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_isFunction_FunctionalObjectUnion =
  _test_functional_isFunction("FunctionalObjectUnion")(FunctionalObjectUnion)(
    (p: (input: FunctionalObjectUnion) => FunctionalObjectUnion) =>
      typia.functional.isFunction(p),
  );
