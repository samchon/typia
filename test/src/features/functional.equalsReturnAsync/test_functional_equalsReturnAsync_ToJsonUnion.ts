import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_functional_equalsReturnAsync_ToJsonUnion =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("ToJsonUnion")(ToJsonUnion)(
      (p: (input: ToJsonUnion) => Promise<ToJsonUnion>) =>
        typia.functional.equalsReturn(p),
    );
