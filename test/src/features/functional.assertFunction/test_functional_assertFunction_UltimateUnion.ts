import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_assertFunction_UltimateUnion =
  _test_functional_assertFunction(TypeGuardError)("UltimateUnion")(
    UltimateUnion,
  )((p: (input: UltimateUnion) => UltimateUnion) =>
    typia.functional.assertFunction(p),
  );
