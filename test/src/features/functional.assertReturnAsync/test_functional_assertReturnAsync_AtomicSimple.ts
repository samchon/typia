import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_AtomicSimple =
  _test_functional_assertReturnAsync(TypeGuardError)("AtomicSimple")(
    AtomicSimple,
  )((p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
    typia.functional.assertReturn(p),
  );
