import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_ToJsonDouble =
  _test_functional_assertEqualsFunction(TypeGuardError)("ToJsonDouble")(
    ToJsonDouble,
  )((p: (input: ToJsonDouble) => ToJsonDouble) =>
    typia.functional.assertEqualsFunction(p),
  );
