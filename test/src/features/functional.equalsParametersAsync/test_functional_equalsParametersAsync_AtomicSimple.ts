import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_equalsParametersAsync_AtomicSimple =
  _test_functional_equalsParametersAsync("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
      typia.functional.equalsParameters(p),
  );
