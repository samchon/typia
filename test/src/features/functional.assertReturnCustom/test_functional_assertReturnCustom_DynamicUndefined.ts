import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_assertReturnCustom_DynamicUndefined =
  _test_functional_assertReturn(CustomGuardError)("DynamicUndefined")(
    DynamicUndefined,
  )((p: (input: DynamicUndefined) => DynamicUndefined) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
