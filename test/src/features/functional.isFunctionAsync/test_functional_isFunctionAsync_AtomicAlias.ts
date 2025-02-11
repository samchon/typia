import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_isFunctionAsync_AtomicAlias =
  _test_functional_isFunctionAsync("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
      typia.functional.isFunction(p),
  );
