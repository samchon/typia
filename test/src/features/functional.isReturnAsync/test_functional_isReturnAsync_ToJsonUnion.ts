import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_isReturnAsync_ToJsonUnion =
  _test_functional_isReturnAsync("ToJsonUnion")(ToJsonUnion)(
    (p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
      typia.functional.isReturn(p),
  );
