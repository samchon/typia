import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_equalsFunction_AtomicSimple = (): void =>
  _test_functional_equalsFunction("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => AtomicSimple) =>
      typia.functional.equalsFunction(p),
  );
