import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_isParametersAsync_SetAlias =
  _test_functional_isParametersAsync("SetAlias")(SetAlias)(
    (p: (input: SetAlias) => Promise<SetAlias>) =>
      typia.functional.isParameters(p),
  );
