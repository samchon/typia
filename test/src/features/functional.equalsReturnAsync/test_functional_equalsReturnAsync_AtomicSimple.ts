import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_equalsReturnAsync_AtomicSimple =
  _test_functional_equalsReturnAsync("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
      typia.functional.equalsReturn(p),
  );
