import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_isFunctionAsync_ConstantAtomicSimple =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("ConstantAtomicSimple")(
      ConstantAtomicSimple,
    )((p: (input: ConstantAtomicSimple) => Promise<ConstantAtomicSimple>) =>
      typia.functional.isFunction(p),
    );
