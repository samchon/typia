import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_validateReturn_FunctionalProperty =
  _test_functional_validateReturn("FunctionalProperty")(FunctionalProperty)(
    (p: (input: FunctionalProperty) => FunctionalProperty) =>
      typia.functional.validateReturn(p),
  );
