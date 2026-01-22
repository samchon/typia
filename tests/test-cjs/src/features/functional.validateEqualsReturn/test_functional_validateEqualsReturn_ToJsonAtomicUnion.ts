import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_validateEqualsReturn_ToJsonAtomicUnion =
  (): void =>
    _test_functional_validateEqualsReturn("ToJsonAtomicUnion")(
      ToJsonAtomicUnion,
    )((p: (input: ToJsonAtomicUnion) => ToJsonAtomicUnion) =>
      typia.functional.validateEqualsReturn(p),
    );
