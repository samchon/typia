import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_isParameters_FunctionalTuple =
  _test_functional_isParameters("FunctionalTuple")(FunctionalTuple)(
    (p: (input: FunctionalTuple) => FunctionalTuple) =>
      typia.functional.isParameters(p),
  );
