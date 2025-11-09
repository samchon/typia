import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_AtomicAlias = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "AtomicAlias"
)(AtomicAlias)(
  (p: (input: AtomicAlias) => AtomicAlias) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)