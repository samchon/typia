import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_assertFunction_ToJsonDouble =
  _test_functional_assertFunction(TypeGuardError)("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => ToJsonDouble) =>
      typia.functional.assertFunction(p),
  );
