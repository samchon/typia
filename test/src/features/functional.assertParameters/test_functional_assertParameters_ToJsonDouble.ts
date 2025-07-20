import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_assertParameters_ToJsonDouble = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ToJsonDouble")(
    ToJsonDouble,
  )((p: (input: ToJsonDouble) => ToJsonDouble) =>
    typia.functional.assertParameters(p),
  );
