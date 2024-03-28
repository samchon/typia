import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_functional_assertReturn_DynamicTag =
  _test_functional_assertReturn(TypeGuardError)("DynamicTag")(DynamicTag)(
    (p: (input: DynamicTag) => DynamicTag) => typia.functional.assertReturn(p),
  );
