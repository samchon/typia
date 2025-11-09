import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_assertFunctionCustom_AtomicSimple = (): void =>
  _test_functional_assertFunction(CustomGuardError)("AtomicSimple")(
    AtomicSimple,
  )((p: (input: AtomicSimple) => AtomicSimple) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
