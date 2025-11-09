import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_equalsReturnAsync_ToJsonDouble =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("ToJsonDouble")(ToJsonDouble)(
      (p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
        typia.functional.equalsReturn(p),
    );
