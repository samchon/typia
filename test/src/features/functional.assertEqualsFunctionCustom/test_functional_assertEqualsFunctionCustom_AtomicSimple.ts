import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_AtomicSimple = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "AtomicSimple"
)(AtomicSimple)(
  (p: (input: AtomicSimple) => AtomicSimple) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)