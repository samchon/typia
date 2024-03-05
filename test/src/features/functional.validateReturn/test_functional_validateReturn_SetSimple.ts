import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_validateReturn_SetSimple =
  _test_functional_validateReturn("SetSimple")(SetSimple)(
    (p: (input: SetSimple) => SetSimple) => typia.functional.validateReturn(p),
  );
