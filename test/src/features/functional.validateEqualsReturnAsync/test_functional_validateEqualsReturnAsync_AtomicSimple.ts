import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_validateEqualsReturnAsync_AtomicSimple =
  _test_functional_validateEqualsReturnAsync("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
      typia.functional.validateEqualsReturn(p),
  );
