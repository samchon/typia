import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_assertFunctionCustom_DynamicJsonValue =
  _test_functional_assertFunction(CustomGuardError)("DynamicJsonValue")(
    DynamicJsonValue,
  )((p: (input: DynamicJsonValue) => DynamicJsonValue) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
