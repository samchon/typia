import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_functional_isReturn_DynamicUndefined = (): void =>
  _test_functional_isReturn("DynamicUndefined")(DynamicUndefined)(
    (p: (input: DynamicUndefined) => DynamicUndefined) =>
      typia.functional.isReturn(p),
  );
