import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_assertReturn_SetAlias =
  _test_functional_assertReturn(TypeGuardError)("SetAlias")(SetAlias)(
    (p: (input: SetAlias) => SetAlias) => typia.functional.assertReturn(p),
  );
