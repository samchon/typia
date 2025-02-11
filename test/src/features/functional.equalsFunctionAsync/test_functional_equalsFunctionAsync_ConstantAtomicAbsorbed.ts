import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_equalsFunctionAsync_ConstantAtomicAbsorbed =
  _test_functional_equalsFunctionAsync("ConstantAtomicAbsorbed")(
    ConstantAtomicAbsorbed,
  )((p: (input: ConstantAtomicAbsorbed) => Promise<ConstantAtomicAbsorbed>) =>
    typia.functional.equalsFunction(p),
  );
