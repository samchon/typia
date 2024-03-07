import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_validateFunctionAsync_UltimateUnion =
  _test_functional_validateFunctionAsync("UltimateUnion")(UltimateUnion)(
    (p: (input: UltimateUnion) => Promise<UltimateUnion>) =>
      typia.functional.validateFunction(p),
  );
