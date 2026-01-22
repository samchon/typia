import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_validateParameters_FunctionalProperty = (): void =>
  _test_functional_validateParameters("FunctionalProperty")(FunctionalProperty)(
    (p: (input: FunctionalProperty) => FunctionalProperty) =>
      typia.functional.validateParameters(p),
  );
