import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_validateReturnAsync_SetSimple =
  _test_functional_validateReturnAsync("SetSimple")(SetSimple)(
    (p: (input: SetSimple) => Promise<SetSimple>) =>
      typia.functional.validateReturn(p),
  );
