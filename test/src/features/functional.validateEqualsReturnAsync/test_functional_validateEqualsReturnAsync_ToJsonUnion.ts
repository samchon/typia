import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_validateEqualsReturnAsync_ToJsonUnion =
  _test_functional_validateEqualsReturnAsync("ToJsonUnion")(ToJsonUnion)(
    (p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
      typia.functional.validateEqualsReturn(p),
  );
