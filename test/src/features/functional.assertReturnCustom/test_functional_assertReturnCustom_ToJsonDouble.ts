import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_assertReturnCustom_ToJsonDouble = (): void =>
  _test_functional_assertReturn(CustomGuardError)("ToJsonDouble")(ToJsonDouble)(
    (p: (input: ToJsonDouble) => ToJsonDouble) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
