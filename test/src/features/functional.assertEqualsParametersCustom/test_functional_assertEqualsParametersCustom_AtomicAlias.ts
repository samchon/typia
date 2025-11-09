import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_AtomicAlias = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "AtomicAlias"
)(AtomicAlias)(
  (p: (input: AtomicAlias) => AtomicAlias) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)