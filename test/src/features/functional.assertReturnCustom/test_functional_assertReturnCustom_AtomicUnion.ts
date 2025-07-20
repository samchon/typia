import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_assertReturnCustom_AtomicUnion = (): void =>
  _test_functional_assertReturn(CustomGuardError)("AtomicUnion")(AtomicUnion)(
    (p: (input: AtomicUnion) => AtomicUnion) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
