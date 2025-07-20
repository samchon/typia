import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_isParameters_ToJsonTuple = (): void =>
  _test_functional_isParameters("ToJsonTuple")(ToJsonTuple)(
    (p: (input: ToJsonTuple) => ToJsonTuple) =>
      typia.functional.isParameters(p),
  );
