import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_assertEqualsReturn_ToJsonAtomicSimple =
  _test_functional_assertEqualsReturn(TypeGuardError)("ToJsonAtomicSimple")(
    ToJsonAtomicSimple,
  )((p: (input: ToJsonAtomicSimple) => ToJsonAtomicSimple) =>
    typia.functional.assertEqualsReturn(p),
  );
