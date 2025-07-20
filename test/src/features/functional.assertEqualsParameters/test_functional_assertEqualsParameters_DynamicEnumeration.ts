import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_assertEqualsParameters_DynamicEnumeration =
  (): void =>
    _test_functional_assertEqualsParameters(TypeGuardError)(
      "DynamicEnumeration",
    )(DynamicEnumeration)(
      (p: (input: DynamicEnumeration) => DynamicEnumeration) =>
        typia.functional.assertEqualsParameters(p),
    );
