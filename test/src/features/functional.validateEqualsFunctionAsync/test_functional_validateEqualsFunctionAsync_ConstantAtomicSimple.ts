import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_validateEqualsFunctionAsync_ConstantAtomicSimple =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("ConstantAtomicSimple")(
      ConstantAtomicSimple,
    )((p: (input: ConstantAtomicSimple) => Promise<ConstantAtomicSimple>) =>
      typia.functional.validateEqualsFunction(p),
    );
