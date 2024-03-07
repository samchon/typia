import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_ConstantAtomicTagged =
  _test_functional_assertReturn(TypeGuardError)("ConstantAtomicTagged")(
    ConstantAtomicTagged,
  )((p: (input: ConstantAtomicTagged) => ConstantAtomicTagged) =>
    typia.functional.assertReturn(p),
  );
