import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_equalsFunction_ToJsonDouble =
  _test_functional_equalsFunction("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => ToJsonDouble) =>
      typia.functional.equalsFunction(p),
  );
