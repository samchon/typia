import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_assertParameters_SetUnion = (): void =>
  _test_functional_assertParameters(TypeGuardError)("SetUnion")(SetUnion)(
    (p: (input: SetUnion) => SetUnion) => typia.functional.assertParameters(p),
  );
