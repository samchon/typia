import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_validateParameters_AtomicClass = (): void =>
  _test_functional_validateParameters("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => AtomicClass) =>
      typia.functional.validateParameters(p),
  );
