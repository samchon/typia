import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_assertEqualsParametersAsyncCustom_AtomicAlias =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "AtomicAlias",
    )(AtomicAlias)((p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
