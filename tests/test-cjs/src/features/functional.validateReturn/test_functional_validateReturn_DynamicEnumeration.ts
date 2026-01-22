import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_functional_validateReturn_DynamicEnumeration = (): void =>
  _test_functional_validateReturn("DynamicEnumeration")(DynamicEnumeration)(
    (p: (input: DynamicEnumeration) => DynamicEnumeration) =>
      typia.functional.validateReturn(p),
  );
