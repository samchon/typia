import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_assertParametersAsyncCustom_AtomicAlias =
  _test_functional_assertParametersAsync(CustomGuardError)("AtomicAlias")(
    AtomicAlias,
  )((p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
