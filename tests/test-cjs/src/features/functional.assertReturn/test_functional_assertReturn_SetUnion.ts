import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_assertReturn_SetUnion = (): void =>
  _test_functional_assertReturn(TypeGuardError)("SetUnion")(SetUnion)(
    (p: (input: SetUnion) => SetUnion) => typia.functional.assertReturn(p),
  );
