import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_assertParameters_UltimateUnion =
  _test_functional_assertParameters(TypeGuardError)("UltimateUnion")(
    UltimateUnion,
  )((p: (input: UltimateUnion) => UltimateUnion) =>
    typia.functional.assertParameters(p),
  );
