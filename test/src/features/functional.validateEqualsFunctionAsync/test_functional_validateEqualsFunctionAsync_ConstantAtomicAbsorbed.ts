import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_validateEqualsFunctionAsync_ConstantAtomicAbsorbed =
  _test_functional_validateEqualsFunctionAsync("ConstantAtomicAbsorbed")(
    ConstantAtomicAbsorbed,
  )((p: (input: ConstantAtomicAbsorbed) => Promise<ConstantAtomicAbsorbed>) =>
    typia.functional.validateEqualsFunction(p),
  );
