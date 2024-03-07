import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_validateReturnAsync_ToJsonUnion =
  _test_functional_validateReturnAsync("ToJsonUnion")(ToJsonUnion)(
    (p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
      typia.functional.validateReturn(p),
  );
