import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_assertReturnAsyncCustom_SetAlias =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("SetAlias")(SetAlias)(
      (p: (input: SetAlias) => Promise<SetAlias>) =>
        typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
