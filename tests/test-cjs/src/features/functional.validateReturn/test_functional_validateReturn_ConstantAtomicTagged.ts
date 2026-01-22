import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_validateReturn_ConstantAtomicTagged = (): void =>
  _test_functional_validateReturn("ConstantAtomicTagged")(ConstantAtomicTagged)(
    (p: (input: ConstantAtomicTagged) => ConstantAtomicTagged) =>
      typia.functional.validateReturn(p),
  );
