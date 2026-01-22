import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_validateReturn_DynamicUndefined = (): void =>
  _test_functional_validateReturn("DynamicUndefined")(DynamicUndefined)(
    (p: (input: DynamicUndefined) => DynamicUndefined) =>
      typia.functional.validateReturn(p),
  );
