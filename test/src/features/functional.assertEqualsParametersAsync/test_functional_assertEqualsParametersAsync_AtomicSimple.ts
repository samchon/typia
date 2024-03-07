import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_AtomicSimple =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("AtomicSimple")(
    AtomicSimple,
  )((p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
    typia.functional.assertEqualsParameters(p),
  );
