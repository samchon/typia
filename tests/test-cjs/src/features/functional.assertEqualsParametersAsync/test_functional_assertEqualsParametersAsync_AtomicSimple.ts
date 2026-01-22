import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_assertEqualsParametersAsync_AtomicSimple =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "AtomicSimple",
    )(AtomicSimple)((p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
      typia.functional.assertEqualsParameters(p),
    );
