import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_validateParameters_FunctionalTuple = (): void =>
  _test_functional_validateParameters("FunctionalTuple")(FunctionalTuple)(
    (p: (input: FunctionalTuple) => FunctionalTuple) =>
      typia.functional.validateParameters(p),
  );
