import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_validateParametersAsync_SetAlias =
  _test_functional_validateParametersAsync("SetAlias")(SetAlias)(
    (p: (input: SetAlias) => Promise<SetAlias>) =>
      typia.functional.validateParameters(p),
  );
