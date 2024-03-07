import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { SetSimple } from "../../structures/SetSimple";

export const test_functional_isReturnAsync_SetSimple =
  _test_functional_isReturnAsync("SetSimple")(SetSimple)(
    (p: (input: SetSimple) => Promise<SetSimple>) =>
      typia.functional.isReturn(p),
  );
