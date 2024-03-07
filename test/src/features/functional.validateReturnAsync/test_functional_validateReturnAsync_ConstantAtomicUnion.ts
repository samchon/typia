import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_validateReturnAsync_ConstantAtomicUnion =
  _test_functional_validateReturnAsync("ConstantAtomicUnion")(
    ConstantAtomicUnion,
  )((p: (input: ConstantAtomicUnion) => Promise<ConstantAtomicUnion>) =>
    typia.functional.validateReturn(p),
  );
