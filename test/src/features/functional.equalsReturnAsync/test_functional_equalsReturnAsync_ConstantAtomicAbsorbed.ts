import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_equalsReturnAsync_ConstantAtomicAbsorbed =
  _test_functional_equalsReturnAsync("ConstantAtomicAbsorbed")(
    ConstantAtomicAbsorbed,
  )((p: (input: ConstantAtomicAbsorbed) => Promise<ConstantAtomicAbsorbed>) =>
    typia.functional.equalsReturn(p),
  );
