import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_assertFunctionCustom_AtomicUnion = (): void =>
  _test_functional_assertFunction(CustomGuardError)("AtomicUnion")(AtomicUnion)(
    (p: (input: AtomicUnion) => AtomicUnion) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
