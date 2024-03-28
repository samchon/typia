import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_assertParametersCustom_DynamicEnumeration =
  _test_functional_assertParameters(CustomGuardError)("DynamicEnumeration")(
    DynamicEnumeration,
  )((p: (input: DynamicEnumeration) => DynamicEnumeration) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
