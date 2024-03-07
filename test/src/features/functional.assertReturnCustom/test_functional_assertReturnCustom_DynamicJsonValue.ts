import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_DynamicJsonValue =
  _test_functional_assertReturn(CustomGuardError)("DynamicJsonValue")(
    DynamicJsonValue,
  )((p: (input: DynamicJsonValue) => DynamicJsonValue) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
