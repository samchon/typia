import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_assertEqualsParametersAsync_AtomicAlias =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("AtomicAlias")(
    AtomicAlias,
  )((p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
    typia.functional.assertEqualsParameters(p),
  );
