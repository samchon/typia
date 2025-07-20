import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_assertParametersCustom_SetAlias = (): void =>
  _test_functional_assertParameters(CustomGuardError)("SetAlias")(SetAlias)(
    (p: (input: SetAlias) => SetAlias) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
