import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_assertEqualsParametersAsyncCustom_AtomicUnion =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)("AtomicUnion")(
    AtomicUnion,
  )((p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
