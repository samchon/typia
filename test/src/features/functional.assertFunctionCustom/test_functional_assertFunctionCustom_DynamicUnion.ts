import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_assertFunctionCustom_DynamicUnion =
  _test_functional_assertFunction(CustomGuardError)("DynamicUnion")(
    DynamicUnion,
  )((p: (input: DynamicUnion) => DynamicUnion) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
