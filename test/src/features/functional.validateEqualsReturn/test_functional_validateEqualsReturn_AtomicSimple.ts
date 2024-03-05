import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_validateEqualsReturn_AtomicSimple =
  _test_functional_validateEqualsReturn("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => AtomicSimple) =>
      typia.functional.validateEqualsReturn(p),
  );
