import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_validateEqualsFunction_ToJsonTuple =
  _test_functional_validateEqualsFunction("ToJsonTuple")(ToJsonTuple)(
    (p: (input: ToJsonTuple) => ToJsonTuple) =>
      typia.functional.validateEqualsFunction(p),
  );
