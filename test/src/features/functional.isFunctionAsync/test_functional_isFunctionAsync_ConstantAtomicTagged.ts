import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_isFunctionAsync_ConstantAtomicTagged =
  _test_functional_isFunctionAsync("ConstantAtomicTagged")(
    ConstantAtomicTagged,
  )((p: (input: ConstantAtomicTagged) => Promise<ConstantAtomicTagged>) =>
    typia.functional.isFunction(p),
  );
