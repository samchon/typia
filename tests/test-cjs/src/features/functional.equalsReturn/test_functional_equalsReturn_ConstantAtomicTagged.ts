import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_equalsReturn_ConstantAtomicTagged = (): void =>
  _test_functional_equalsReturn("ConstantAtomicTagged")(ConstantAtomicTagged)(
    (p: (input: ConstantAtomicTagged) => ConstantAtomicTagged) =>
      typia.functional.equalsReturn(p),
  );
