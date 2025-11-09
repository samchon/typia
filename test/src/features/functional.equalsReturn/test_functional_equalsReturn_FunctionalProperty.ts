import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_equalsReturn_FunctionalProperty = (): void =>
  _test_functional_equalsReturn("FunctionalProperty")(FunctionalProperty)(
    (p: (input: FunctionalProperty) => FunctionalProperty) =>
      typia.functional.equalsReturn(p),
  );
