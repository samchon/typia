import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { SetUnion } from "../../structures/SetUnion";

export const test_functional_isFunctionAsync_SetUnion =
  _test_functional_isFunctionAsync("SetUnion")(SetUnion)(
    (p: (input: SetUnion) => Promise<SetUnion>) =>
      typia.functional.isFunction(p),
  );
