import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_validateReturn_SetAlias =
  _test_functional_validateReturn("SetAlias")(SetAlias)(
    (p: (input: SetAlias) => SetAlias) => typia.functional.validateReturn(p),
  );
