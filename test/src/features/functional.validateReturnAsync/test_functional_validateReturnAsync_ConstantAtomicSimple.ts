import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_validateReturnAsync_ConstantAtomicSimple =
  _test_functional_validateReturnAsync("ConstantAtomicSimple")(
    ConstantAtomicSimple,
  )((p: (input: ConstantAtomicSimple) => Promise<ConstantAtomicSimple>) =>
    typia.functional.validateReturn(p),
  );
