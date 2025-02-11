import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_isParametersAsync_ConstantAtomicAbsorbed =
  _test_functional_isParametersAsync("ConstantAtomicAbsorbed")(
    ConstantAtomicAbsorbed,
  )((p: (input: ConstantAtomicAbsorbed) => Promise<ConstantAtomicAbsorbed>) =>
    typia.functional.isParameters(p),
  );
