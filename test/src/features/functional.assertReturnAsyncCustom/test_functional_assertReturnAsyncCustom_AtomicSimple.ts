import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_assertReturnAsyncCustom_AtomicSimple =
  _test_functional_assertReturnAsync(CustomGuardError)("AtomicSimple")(
    AtomicSimple,
  )((p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
