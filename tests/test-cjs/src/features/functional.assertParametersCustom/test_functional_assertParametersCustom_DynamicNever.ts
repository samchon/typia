import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_assertParametersCustom_DynamicNever = (): void =>
  _test_functional_assertParameters(CustomGuardError)("DynamicNever")(
    DynamicNever,
  )((p: (input: DynamicNever) => DynamicNever) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
