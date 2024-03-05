import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_equalsReturn_AtomicSimple =
  _test_functional_equalsReturn("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => AtomicSimple) =>
      typia.functional.equalsReturn(p),
  );
