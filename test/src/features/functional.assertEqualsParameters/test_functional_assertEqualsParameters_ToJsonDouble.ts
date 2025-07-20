import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_assertEqualsParameters_ToJsonDouble = (): void =>
  _test_functional_assertEqualsParameters(TypeGuardError)("ToJsonDouble")(
    ToJsonDouble,
  )((p: (input: ToJsonDouble) => ToJsonDouble) =>
    typia.functional.assertEqualsParameters(p),
  );
