import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_validateReturn_ToJsonTuple =
  _test_functional_validateReturn("ToJsonTuple")(ToJsonTuple)(
    (p: (input: ToJsonTuple) => ToJsonTuple) =>
      typia.functional.validateReturn(p),
  );
