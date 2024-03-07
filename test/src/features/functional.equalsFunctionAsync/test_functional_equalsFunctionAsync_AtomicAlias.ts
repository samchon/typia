import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_equalsFunctionAsync_AtomicAlias =
  _test_functional_equalsFunctionAsync("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
      typia.functional.equalsFunction(p),
  );
