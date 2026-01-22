import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_assertReturnAsync_ConstantAtomicUnion =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ConstantAtomicUnion")(
      ConstantAtomicUnion,
    )((p: (input: ConstantAtomicUnion) => Promise<ConstantAtomicUnion>) =>
      typia.functional.assertReturn(p),
    );
