import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_equalsReturnAsync_ToJsonAtomicSimple =
  _test_functional_equalsReturnAsync("ToJsonAtomicSimple")(ToJsonAtomicSimple)(
    (p: (input: ToJsonAtomicSimple) => Promise<ToJsonAtomicSimple>) =>
      typia.functional.equalsReturn(p),
  );
