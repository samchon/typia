import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_isReturn_AtomicSimple = (): void =>
  _test_functional_isReturn("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => AtomicSimple) => typia.functional.isReturn(p),
  );
