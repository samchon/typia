import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_isReturn_FunctionalProperty =
  _test_functional_isReturn("FunctionalProperty")(FunctionalProperty)(
    (p: (input: FunctionalProperty) => FunctionalProperty) =>
      typia.functional.isReturn(p),
  );
