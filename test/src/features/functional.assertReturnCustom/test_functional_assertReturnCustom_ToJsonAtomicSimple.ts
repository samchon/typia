import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_assertReturnCustom_ToJsonAtomicSimple = (): void =>
  _test_functional_assertReturn(CustomGuardError)("ToJsonAtomicSimple")(
    ToJsonAtomicSimple,
  )((p: (input: ToJsonAtomicSimple) => ToJsonAtomicSimple) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
