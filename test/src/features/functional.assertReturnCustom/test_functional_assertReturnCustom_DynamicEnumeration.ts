import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_assertReturnCustom_DynamicEnumeration =
  _test_functional_assertReturn(CustomGuardError)("DynamicEnumeration")(
    DynamicEnumeration,
  )((p: (input: DynamicEnumeration) => DynamicEnumeration) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
