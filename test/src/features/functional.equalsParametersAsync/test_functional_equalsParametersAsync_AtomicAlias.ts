import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_equalsParametersAsync_AtomicAlias =
  _test_functional_equalsParametersAsync("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
      typia.functional.equalsParameters(p),
  );
