import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_isReturnAsync_AtomicAlias =
  _test_functional_isReturnAsync("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
      typia.functional.isReturn(p),
  );
