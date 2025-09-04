import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_assertReturnCustom_AtomicSimple = (): void =>
  _test_functional_assertReturn(CustomGuardError)("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => AtomicSimple) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
