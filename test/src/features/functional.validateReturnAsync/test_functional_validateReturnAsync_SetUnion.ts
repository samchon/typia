import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_validateReturnAsync_SetUnion = (): Promise<void> =>
  _test_functional_validateReturnAsync("SetUnion")(SetUnion)(
    (p: (input: SetUnion) => Promise<SetUnion>) =>
      typia.functional.validateReturn(p),
  );
