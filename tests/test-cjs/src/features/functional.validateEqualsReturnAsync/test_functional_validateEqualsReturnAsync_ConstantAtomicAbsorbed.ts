import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_validateEqualsReturnAsync_ConstantAtomicAbsorbed =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("ConstantAtomicAbsorbed")(
      ConstantAtomicAbsorbed,
    )((p: (input: ConstantAtomicAbsorbed) => Promise<ConstantAtomicAbsorbed>) =>
      typia.functional.validateEqualsReturn(p),
    );
