import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_assertEqualsFunction_ToJsonAtomicSimple =
  _test_functional_assertEqualsFunction(TypeGuardError)("ToJsonAtomicSimple")(
    ToJsonAtomicSimple,
  )((p: (input: ToJsonAtomicSimple) => ToJsonAtomicSimple) =>
    typia.functional.assertEqualsFunction(p),
  );
