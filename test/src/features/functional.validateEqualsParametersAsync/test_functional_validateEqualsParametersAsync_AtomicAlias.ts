import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_validateEqualsParametersAsync_AtomicAlias =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("AtomicAlias")(AtomicAlias)(
      (p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
        typia.functional.validateEqualsParameters(p),
    );
