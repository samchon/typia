import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_validateParametersAsync_ConstantAtomicTagged =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ConstantAtomicTagged")(
      ConstantAtomicTagged,
    )((p: (input: ConstantAtomicTagged) => Promise<ConstantAtomicTagged>) =>
      typia.functional.validateParameters(p),
    );
