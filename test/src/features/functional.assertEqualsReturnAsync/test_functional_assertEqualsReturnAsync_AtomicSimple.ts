import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_assertEqualsReturnAsync_AtomicSimple =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("AtomicSimple")(
    AtomicSimple,
  )((p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
    typia.functional.assertEqualsReturn(p),
  );
