import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_equalsFunctionAsync_ConstantAtomicTagged =
  _test_functional_equalsFunctionAsync("ConstantAtomicTagged")(
    ConstantAtomicTagged,
  )((p: (input: ConstantAtomicTagged) => Promise<ConstantAtomicTagged>) =>
    typia.functional.equalsFunction(p),
  );
