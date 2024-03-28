import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_assertFunctionCustom_SetUnion =
  _test_functional_assertFunction(CustomGuardError)("SetUnion")(SetUnion)(
    (p: (input: SetUnion) => SetUnion) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
