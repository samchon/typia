import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_validateReturn_UltimateUnion =
  _test_functional_validateReturn("UltimateUnion")(UltimateUnion)(
    (p: (input: UltimateUnion) => UltimateUnion) =>
      typia.functional.validateReturn(p),
  );
