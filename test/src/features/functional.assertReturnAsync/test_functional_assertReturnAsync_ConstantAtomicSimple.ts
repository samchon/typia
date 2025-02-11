import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_assertReturnAsync_ConstantAtomicSimple =
  _test_functional_assertReturnAsync(TypeGuardError)("ConstantAtomicSimple")(
    ConstantAtomicSimple,
  )((p: (input: ConstantAtomicSimple) => Promise<ConstantAtomicSimple>) =>
    typia.functional.assertReturn(p),
  );
