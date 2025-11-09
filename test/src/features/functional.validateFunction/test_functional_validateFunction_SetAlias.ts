import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_validateFunction_SetAlias = (): void =>
  _test_functional_validateFunction("SetAlias")(SetAlias)(
    (p: (input: SetAlias) => SetAlias) => typia.functional.validateFunction(p),
  );
