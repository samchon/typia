import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_assertEqualsParametersCustom_ToJsonAtomicSimple =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)(
      "ToJsonAtomicSimple",
    )(ToJsonAtomicSimple)(
      (p: (input: ToJsonAtomicSimple) => ToJsonAtomicSimple) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
