import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_assertEqualsReturnCustom_ToJsonAtomicSimple =
  _test_functional_assertEqualsReturn(CustomGuardError)("ToJsonAtomicSimple")(
    ToJsonAtomicSimple,
  )((p: (input: ToJsonAtomicSimple) => ToJsonAtomicSimple) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
