import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_assertFunctionAsyncCustom_AtomicSimple =
  _test_functional_assertFunctionAsync(CustomGuardError)("AtomicSimple")(
    AtomicSimple,
  )((p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
