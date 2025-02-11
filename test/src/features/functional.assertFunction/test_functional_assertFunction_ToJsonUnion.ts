import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_assertFunction_ToJsonUnion =
  _test_functional_assertFunction(TypeGuardError)("ToJsonUnion")(ToJsonUnion)(
    (p: (input: ToJsonUnion) => ToJsonUnion) =>
      typia.functional.assertFunction(p),
  );
