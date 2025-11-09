import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_assertParametersCustom_AtomicUnion = (): void =>
  _test_functional_assertParameters(CustomGuardError)("AtomicUnion")(
    AtomicUnion,
  )((p: (input: AtomicUnion) => AtomicUnion) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
