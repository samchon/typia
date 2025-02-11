import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_isFunctionAsync_ToJsonUnion =
  _test_functional_isFunctionAsync("ToJsonUnion")(ToJsonUnion)(
    (p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
      typia.functional.isFunction(p),
  );
