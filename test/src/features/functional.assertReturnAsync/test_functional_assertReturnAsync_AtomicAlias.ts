import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_assertReturnAsync_AtomicAlias =
  _test_functional_assertReturnAsync(TypeGuardError)("AtomicAlias")(
    AtomicAlias,
  )((p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
    typia.functional.assertReturn(p),
  );
