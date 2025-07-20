import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_isFunction_ToJsonNull = (): void =>
  _test_functional_isFunction("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => ToJsonNull) => typia.functional.isFunction(p),
  );
