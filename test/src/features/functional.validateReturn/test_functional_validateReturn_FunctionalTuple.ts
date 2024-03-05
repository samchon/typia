import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_validateReturn_FunctionalTuple =
  _test_functional_validateReturn("FunctionalTuple")(FunctionalTuple)(
    (p: (input: FunctionalTuple) => FunctionalTuple) =>
      typia.functional.validateReturn(p),
  );
