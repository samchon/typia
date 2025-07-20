import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_assertFunctionAsync_UltimateUnion =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("UltimateUnion")(
      UltimateUnion,
    )((p: (input: UltimateUnion) => Promise<UltimateUnion>) =>
      typia.functional.assertFunction(p),
    );
