import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_assertParametersAsync_AtomicAlias =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("AtomicAlias")(
      AtomicAlias,
    )((p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
      typia.functional.assertParameters(p),
    );
