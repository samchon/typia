import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_assertParametersCustom_DynamicUndefined =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("DynamicUndefined")(
      DynamicUndefined,
    )((p: (input: DynamicUndefined) => DynamicUndefined) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
