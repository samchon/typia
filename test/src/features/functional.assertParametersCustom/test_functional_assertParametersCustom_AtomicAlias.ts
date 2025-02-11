import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_assertParametersCustom_AtomicAlias =
  _test_functional_assertParameters(CustomGuardError)("AtomicAlias")(
    AtomicAlias,
  )((p: (input: AtomicAlias) => AtomicAlias) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
