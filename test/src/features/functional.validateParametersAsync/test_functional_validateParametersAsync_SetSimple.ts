import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_validateParametersAsync_SetSimple =
  _test_functional_validateParametersAsync("SetSimple")(SetSimple)(
    (p: (input: SetSimple) => Promise<SetSimple>) =>
      typia.functional.validateParameters(p),
  );
