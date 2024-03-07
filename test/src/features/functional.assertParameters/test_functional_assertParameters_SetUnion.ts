import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { SetUnion } from "../../structures/SetUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_SetUnion =
  _test_functional_assertParameters(TypeGuardError)("SetUnion")(SetUnion)(
    (p: (input: SetUnion) => SetUnion) => typia.functional.assertParameters(p),
  );
