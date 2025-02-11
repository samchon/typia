import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_assertReturnCustom_ConstantAtomicTagged =
  _test_functional_assertReturn(CustomGuardError)("ConstantAtomicTagged")(
    ConstantAtomicTagged,
  )((p: (input: ConstantAtomicTagged) => ConstantAtomicTagged) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
