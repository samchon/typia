import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_assertParametersCustom_ToJsonAtomicSimple =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("ToJsonAtomicSimple")(
      ToJsonAtomicSimple,
    )((p: (input: ToJsonAtomicSimple) => ToJsonAtomicSimple) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
