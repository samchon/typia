import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_assertEqualsFunctionAsyncCustom_AtomicSimple =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)("AtomicSimple")(
    AtomicSimple,
  )((p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
