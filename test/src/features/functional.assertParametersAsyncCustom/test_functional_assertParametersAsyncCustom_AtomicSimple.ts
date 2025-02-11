import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_assertParametersAsyncCustom_AtomicSimple =
  _test_functional_assertParametersAsync(CustomGuardError)("AtomicSimple")(
    AtomicSimple,
  )((p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
