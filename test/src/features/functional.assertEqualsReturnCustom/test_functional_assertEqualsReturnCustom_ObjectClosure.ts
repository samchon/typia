import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ObjectClosure } from "../../structures/ObjectClosure";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ObjectClosure = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "ObjectClosure"
)(ObjectClosure)(
  (p: (input: ObjectClosure) => ObjectClosure) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)