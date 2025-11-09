import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_isParametersAsync_ConstantAtomicUnion =
  (): Promise<void> =>
    _test_functional_isParametersAsync("ConstantAtomicUnion")(
      ConstantAtomicUnion,
    )((p: (input: ConstantAtomicUnion) => Promise<ConstantAtomicUnion>) =>
      typia.functional.isParameters(p),
    );
