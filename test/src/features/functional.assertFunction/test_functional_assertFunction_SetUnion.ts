import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_assertFunction_SetUnion =
  _test_functional_assertFunction(TypeGuardError)("SetUnion")(SetUnion)(
    (p: (input: SetUnion) => SetUnion) => typia.functional.assertFunction(p),
  );
