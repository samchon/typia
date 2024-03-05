import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_isFunction_ToJsonUnion =
  _test_functional_isFunction("ToJsonUnion")(ToJsonUnion)(
    (p: (input: ToJsonUnion) => ToJsonUnion) => typia.functional.isFunction(p),
  );
