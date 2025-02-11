import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_assertReturnAsyncCustom_ConstantAtomicUnion =
  _test_functional_assertReturnAsync(CustomGuardError)("ConstantAtomicUnion")(
    ConstantAtomicUnion,
  )((p: (input: ConstantAtomicUnion) => Promise<ConstantAtomicUnion>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
