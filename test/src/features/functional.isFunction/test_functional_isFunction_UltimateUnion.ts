import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_isFunction_UltimateUnion = (): void =>
  _test_functional_isFunction("UltimateUnion")(UltimateUnion)(
    (p: (input: UltimateUnion) => UltimateUnion) =>
      typia.functional.isFunction(p),
  );
