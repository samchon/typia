import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_assertFunctionCustom_DynamicUndefined = (): void =>
  _test_functional_assertFunction(CustomGuardError)("DynamicUndefined")(
    DynamicUndefined,
  )((p: (input: DynamicUndefined) => DynamicUndefined) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
