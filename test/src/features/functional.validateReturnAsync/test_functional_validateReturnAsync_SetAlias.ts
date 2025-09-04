import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_validateReturnAsync_SetAlias = (): Promise<void> =>
  _test_functional_validateReturnAsync("SetAlias")(SetAlias)(
    (p: (input: SetAlias) => Promise<SetAlias>) =>
      typia.functional.validateReturn(p),
  );
