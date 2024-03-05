import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_assertEqualsReturn_ConstantAtomicSimple =
  _test_functional_assertEqualsReturn(TypeGuardError)("ConstantAtomicSimple")(
    ConstantAtomicSimple,
  )((p: (input: ConstantAtomicSimple) => ConstantAtomicSimple) =>
    typia.functional.assertEqualsReturn(p),
  );
