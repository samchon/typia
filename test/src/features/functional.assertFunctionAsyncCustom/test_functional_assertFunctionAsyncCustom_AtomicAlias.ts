import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_assertFunctionAsyncCustom_AtomicAlias =
  _test_functional_assertFunctionAsync(CustomGuardError)("AtomicAlias")(
    AtomicAlias,
  )((p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
