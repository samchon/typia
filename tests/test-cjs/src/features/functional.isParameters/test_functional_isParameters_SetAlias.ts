import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_isParameters_SetAlias = (): void =>
  _test_functional_isParameters("SetAlias")(SetAlias)(
    (p: (input: SetAlias) => SetAlias) => typia.functional.isParameters(p),
  );
