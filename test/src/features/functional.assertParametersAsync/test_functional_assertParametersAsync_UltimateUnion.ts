import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_assertParametersAsync_UltimateUnion =
  _test_functional_assertParametersAsync(TypeGuardError)("UltimateUnion")(
    UltimateUnion,
  )((p: (input: UltimateUnion) => Promise<UltimateUnion>) =>
    typia.functional.assertParameters(p),
  );
