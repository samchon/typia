import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_functional_assertParametersCustom_DynamicJsonValue =
  _test_functional_assertParameters(CustomGuardError)("DynamicJsonValue")(
    DynamicJsonValue,
  )((p: (input: DynamicJsonValue) => DynamicJsonValue) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
