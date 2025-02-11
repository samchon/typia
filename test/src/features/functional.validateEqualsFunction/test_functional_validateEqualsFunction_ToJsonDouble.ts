import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_validateEqualsFunction_ToJsonDouble =
  _test_functional_validateEqualsFunction("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => ToJsonDouble) =>
      typia.functional.validateEqualsFunction(p),
  );
