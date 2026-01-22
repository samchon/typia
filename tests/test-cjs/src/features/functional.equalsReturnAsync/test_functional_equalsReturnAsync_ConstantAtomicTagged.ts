import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_equalsReturnAsync_ConstantAtomicTagged =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("ConstantAtomicTagged")(
      ConstantAtomicTagged,
    )((p: (input: ConstantAtomicTagged) => Promise<ConstantAtomicTagged>) =>
      typia.functional.equalsReturn(p),
    );
