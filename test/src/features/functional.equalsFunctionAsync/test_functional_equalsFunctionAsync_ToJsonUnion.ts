import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_equalsFunctionAsync_ToJsonUnion =
  _test_functional_equalsFunctionAsync("ToJsonUnion")(ToJsonUnion)(
    (p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
      typia.functional.equalsFunction(p),
  );
