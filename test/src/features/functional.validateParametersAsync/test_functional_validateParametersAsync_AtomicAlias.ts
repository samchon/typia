import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_validateParametersAsync_AtomicAlias =
  _test_functional_validateParametersAsync("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
      typia.functional.validateParameters(p),
  );
