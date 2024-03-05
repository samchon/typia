import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_validateEqualsParameters_FunctionalTuple =
  _test_functional_validateEqualsParameters("FunctionalTuple")(FunctionalTuple)(
    (p: (input: FunctionalTuple) => FunctionalTuple) =>
      typia.functional.validateEqualsParameters(p),
  );
