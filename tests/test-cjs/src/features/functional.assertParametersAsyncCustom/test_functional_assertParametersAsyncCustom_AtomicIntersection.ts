import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_functional_assertParametersAsyncCustom_AtomicIntersection =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "AtomicIntersection",
    )(AtomicIntersection)(
      (p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
