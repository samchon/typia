import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_validateReturn_DynamicTag =
  _test_functional_validateReturn("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => DynamicTag) =>
      typia.functional.validateReturn(p),
  );
