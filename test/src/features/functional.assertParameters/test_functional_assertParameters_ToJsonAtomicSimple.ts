import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ToJsonAtomicSimple =
  _test_functional_assertParameters(TypeGuardError)("ToJsonAtomicSimple")(
    ToJsonAtomicSimple,
  )((p: (input: ToJsonAtomicSimple) => ToJsonAtomicSimple) =>
    typia.functional.assertParameters(p),
  );
