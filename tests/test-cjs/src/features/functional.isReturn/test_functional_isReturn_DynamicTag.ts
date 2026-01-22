import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_isReturn_DynamicTag = (): void =>
  _test_functional_isReturn("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => DynamicTag) => typia.functional.isReturn(p),
  );
