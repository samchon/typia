import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { UltimateUnion } from "../../structures/UltimateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_UltimateUnion =
  _test_functional_assertFunction(CustomGuardError)("UltimateUnion")(
    UltimateUnion,
  )((p: (input: UltimateUnion) => UltimateUnion) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
