import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_validateEqualsReturn_ConstantAtomicSimple =
  (): void =>
    _test_functional_validateEqualsReturn("ConstantAtomicSimple")(
      ConstantAtomicSimple,
    )((p: (input: ConstantAtomicSimple) => ConstantAtomicSimple) =>
      typia.functional.validateEqualsReturn(p),
    );
