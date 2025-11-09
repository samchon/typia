import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ClassClosure } from "../../structures/ClassClosure";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_ClassClosure = (): void => _test_functional_assertEqualsReturn(TypeGuardError)(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => ClassClosure) => typia.functional.assertEqualsReturn(p),
)