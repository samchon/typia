import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_assertEqualsParametersCustom_AtomicSimple =
  (): void =>
    _test_functional_assertEqualsParameters(CustomGuardError)("AtomicSimple")(
      AtomicSimple,
    )((p: (input: AtomicSimple) => AtomicSimple) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
    );
