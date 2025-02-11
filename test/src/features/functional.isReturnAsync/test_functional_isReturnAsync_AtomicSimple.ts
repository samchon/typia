import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_isReturnAsync_AtomicSimple =
  _test_functional_isReturnAsync("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
      typia.functional.isReturn(p),
  );
