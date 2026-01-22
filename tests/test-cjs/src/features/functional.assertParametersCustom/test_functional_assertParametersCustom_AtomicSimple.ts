import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_assertParametersCustom_AtomicSimple = (): void =>
  _test_functional_assertParameters(CustomGuardError)("AtomicSimple")(
    AtomicSimple,
  )((p: (input: AtomicSimple) => AtomicSimple) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
