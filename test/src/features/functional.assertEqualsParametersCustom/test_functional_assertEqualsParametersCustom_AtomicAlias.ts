import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_assertEqualsParametersCustom_AtomicAlias =
  _test_functional_assertEqualsParameters(CustomGuardError)("AtomicAlias")(
    AtomicAlias,
  )((p: (input: AtomicAlias) => AtomicAlias) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
