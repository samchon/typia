import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_validateFunctionAsync_AtomicSimple =
  _test_functional_validateFunctionAsync("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
      typia.functional.validateFunction(p),
  );
