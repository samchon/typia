import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_isParametersAsync_SetSimple =
  _test_functional_isParametersAsync("SetSimple")(SetSimple)(
    (p: (input: SetSimple) => Promise<SetSimple>) =>
      typia.functional.isParameters(p),
  );
