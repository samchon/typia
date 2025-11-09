import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_validateParameters_ToJsonTuple = (): void =>
  _test_functional_validateParameters("ToJsonTuple")(ToJsonTuple)(
    (p: (input: ToJsonTuple) => ToJsonTuple) =>
      typia.functional.validateParameters(p),
  );
