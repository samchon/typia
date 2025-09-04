import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_validateEqualsParameters_ToJsonAtomicUnion =
  (): void =>
    _test_functional_validateEqualsParameters("ToJsonAtomicUnion")(
      ToJsonAtomicUnion,
    )((p: (input: ToJsonAtomicUnion) => ToJsonAtomicUnion) =>
      typia.functional.validateEqualsParameters(p),
    );
