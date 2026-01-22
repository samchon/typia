import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_assertParametersAsyncCustom_AtomicUnion =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("AtomicUnion")(
      AtomicUnion,
    )((p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
