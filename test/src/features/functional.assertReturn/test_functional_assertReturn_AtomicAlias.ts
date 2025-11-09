import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_AtomicAlias = (): void => _test_functional_assertReturn(TypeGuardError)(
  "AtomicAlias"
)(AtomicAlias)(
  (p: (input: AtomicAlias) => AtomicAlias) => typia.functional.assertReturn(p),
)