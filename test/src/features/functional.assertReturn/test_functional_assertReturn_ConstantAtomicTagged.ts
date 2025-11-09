import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_assertReturn_ConstantAtomicTagged = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ConstantAtomicTagged")(
    ConstantAtomicTagged,
  )((p: (input: ConstantAtomicTagged) => ConstantAtomicTagged) =>
    typia.functional.assertReturn(p),
  );
