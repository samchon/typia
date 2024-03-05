import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_validateEqualsParameters_AtomicClass =
  _test_functional_validateEqualsParameters("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => AtomicClass) =>
      typia.functional.validateEqualsParameters(p),
  );
