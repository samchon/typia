import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ClassClosure } from "../../structures/ClassClosure";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_ClassClosure = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => ClassClosure) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)