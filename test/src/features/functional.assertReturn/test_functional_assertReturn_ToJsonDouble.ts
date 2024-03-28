import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_assertReturn_ToJsonDouble =
  _test_functional_assertReturn(TypeGuardError)("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => ToJsonDouble) =>
      typia.functional.assertReturn(p),
  );
