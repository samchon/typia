import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_assertEqualsParametersCustom_DynamicEnumeration =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "DynamicEnumeration",
    )(DynamicEnumeration)(
      (p: (input: DynamicEnumeration) => DynamicEnumeration) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
