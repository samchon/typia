import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_validateFunction_AtomicSimple =
  _test_functional_validateFunction("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => AtomicSimple) =>
      typia.functional.validateFunction(p),
  );
