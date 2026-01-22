import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_isFunction_ConstantAtomicTagged = (): void =>
  _test_functional_isFunction("ConstantAtomicTagged")(ConstantAtomicTagged)(
    (p: (input: ConstantAtomicTagged) => ConstantAtomicTagged) =>
      typia.functional.isFunction(p),
  );
