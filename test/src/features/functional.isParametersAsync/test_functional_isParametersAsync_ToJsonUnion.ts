import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_isParametersAsync_ToJsonUnion =
  _test_functional_isParametersAsync("ToJsonUnion")(ToJsonUnion)(
    (p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
      typia.functional.isParameters(p),
  );
