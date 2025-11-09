import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectClosure } from "../../structures/ObjectClosure";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_ObjectClosure = (): void => _test_functional_assertEqualsReturn(TypeGuardError)(
  "ObjectClosure"
)(ObjectClosure)(
  (p: (input: ObjectClosure) => ObjectClosure) => typia.functional.assertEqualsReturn(p),
)