import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { SetAlias } from "../../structures/SetAlias";

export const test_functional_isReturnAsync_SetAlias = (): Promise<void> =>
  _test_functional_isReturnAsync("SetAlias")(SetAlias)(
    (p: (input: SetAlias) => Promise<SetAlias>) => typia.functional.isReturn(p),
  );
