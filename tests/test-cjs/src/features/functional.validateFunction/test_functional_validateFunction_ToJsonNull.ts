import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_validateFunction_ToJsonNull = (): void =>
  _test_functional_validateFunction("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => ToJsonNull) =>
      typia.functional.validateFunction(p),
  );
