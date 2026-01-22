import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_equalsReturn_ConstantAtomicWrapper = (): void =>
  _test_functional_equalsReturn("ConstantAtomicWrapper")(ConstantAtomicWrapper)(
    (p: (input: ConstantAtomicWrapper) => ConstantAtomicWrapper) =>
      typia.functional.equalsReturn(p),
  );
