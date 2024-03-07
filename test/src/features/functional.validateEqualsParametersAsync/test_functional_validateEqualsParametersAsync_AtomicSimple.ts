import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_validateEqualsParametersAsync_AtomicSimple =
  _test_functional_validateEqualsParametersAsync("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
      typia.functional.validateEqualsParameters(p),
  );
