import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_assertFunctionCustom_SetAlias = (): void =>
  _test_functional_assertFunction(CustomGuardError)("SetAlias")(SetAlias)(
    (p: (input: SetAlias) => SetAlias) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
