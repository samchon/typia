import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ConstantAtomicTagged =
  _test_functional_assertReturnAsync(TypeGuardError)("ConstantAtomicTagged")(
    ConstantAtomicTagged,
  )((p: (input: ConstantAtomicTagged) => Promise<ConstantAtomicTagged>) =>
    typia.functional.assertReturn(p),
  );
