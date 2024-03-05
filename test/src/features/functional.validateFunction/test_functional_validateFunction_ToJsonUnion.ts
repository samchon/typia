import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_validateFunction_ToJsonUnion =
  _test_functional_validateFunction("ToJsonUnion")(ToJsonUnion)(
    (p: (input: ToJsonUnion) => ToJsonUnion) =>
      typia.functional.validateFunction(p),
  );
