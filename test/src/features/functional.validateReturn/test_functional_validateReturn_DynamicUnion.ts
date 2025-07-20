import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_functional_validateReturn_DynamicUnion = (): void =>
  _test_functional_validateReturn("DynamicUnion")(DynamicUnion)(
    (p: (input: DynamicUnion) => DynamicUnion) =>
      typia.functional.validateReturn(p),
  );
