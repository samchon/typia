import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_validateEqualsReturn_ToJsonAtomicSimple =
  (): void =>
    _test_functional_validateEqualsReturn("ToJsonAtomicSimple")(
      ToJsonAtomicSimple,
    )((p: (input: ToJsonAtomicSimple) => ToJsonAtomicSimple) =>
      typia.functional.validateEqualsReturn(p),
    );
