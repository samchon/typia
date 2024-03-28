import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_assertReturnAsyncCustom_AtomicAlias =
  _test_functional_assertReturnAsync(CustomGuardError)("AtomicAlias")(
    AtomicAlias,
  )((p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
