import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_validateReturnAsync_AtomicSimple =
  _test_functional_validateReturnAsync("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
      typia.functional.validateReturn(p),
  );
