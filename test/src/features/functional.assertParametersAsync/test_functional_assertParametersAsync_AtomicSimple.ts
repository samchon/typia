import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_assertParametersAsync_AtomicSimple =
  _test_functional_assertParametersAsync(TypeGuardError)("AtomicSimple")(
    AtomicSimple,
  )((p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
    typia.functional.assertParameters(p),
  );
