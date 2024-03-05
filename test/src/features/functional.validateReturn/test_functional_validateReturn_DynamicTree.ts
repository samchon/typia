import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_functional_validateReturn_DynamicTree =
  _test_functional_validateReturn("DynamicTree")(DynamicTree)(
    (p: (input: DynamicTree) => DynamicTree) =>
      typia.functional.validateReturn(p),
  );
