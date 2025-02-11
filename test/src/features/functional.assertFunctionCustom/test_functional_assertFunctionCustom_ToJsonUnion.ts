import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_assertFunctionCustom_ToJsonUnion =
  _test_functional_assertFunction(CustomGuardError)("ToJsonUnion")(ToJsonUnion)(
    (p: (input: ToJsonUnion) => ToJsonUnion) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
