import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_equalsFunction_FunctionalTuple =
  _test_functional_equalsFunction("FunctionalTuple")(FunctionalTuple)(
    (p: (input: FunctionalTuple) => FunctionalTuple) =>
      typia.functional.equalsFunction(p),
  );
