import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_assertReturnCustom_SetAlias = (): void =>
  _test_functional_assertReturn(CustomGuardError)("SetAlias")(SetAlias)(
    (p: (input: SetAlias) => SetAlias) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
