import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_functional_assertFunctionCustom_DynamicNever = (): void =>
  _test_functional_assertFunction(CustomGuardError)("DynamicNever")(
    DynamicNever,
  )((p: (input: DynamicNever) => DynamicNever) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
