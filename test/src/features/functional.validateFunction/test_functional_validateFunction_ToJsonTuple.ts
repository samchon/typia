import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_validateFunction_ToJsonTuple =
  _test_functional_validateFunction("ToJsonTuple")(ToJsonTuple)(
    (p: (input: ToJsonTuple) => ToJsonTuple) =>
      typia.functional.validateFunction(p),
  );
