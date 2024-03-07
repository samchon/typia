import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_validateReturnAsync_AtomicAlias =
  _test_functional_validateReturnAsync("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
      typia.functional.validateReturn(p),
  );
