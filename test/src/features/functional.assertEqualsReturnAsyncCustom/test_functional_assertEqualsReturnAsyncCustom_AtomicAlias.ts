import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_assertEqualsReturnAsyncCustom_AtomicAlias =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("AtomicAlias")(
    AtomicAlias,
  )((p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
