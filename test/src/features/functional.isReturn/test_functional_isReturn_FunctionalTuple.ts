import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_isReturn_FunctionalTuple =
  _test_functional_isReturn("FunctionalTuple")(FunctionalTuple)(
    (p: (input: FunctionalTuple) => FunctionalTuple) =>
      typia.functional.isReturn(p),
  );
