import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_validateFunction_UltimateUnion = (): void =>
  _test_functional_validateFunction("UltimateUnion")(UltimateUnion)(
    (p: (input: UltimateUnion) => UltimateUnion) =>
      typia.functional.validateFunction(p),
  );
