import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_assertParameters_SetAlias = (): void =>
  _test_functional_assertParameters(TypeGuardError)("SetAlias")(SetAlias)(
    (p: (input: SetAlias) => SetAlias) => typia.functional.assertParameters(p),
  );
