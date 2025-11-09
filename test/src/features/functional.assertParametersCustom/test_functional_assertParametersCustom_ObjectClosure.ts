import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectClosure } from "../../structures/ObjectClosure";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ObjectClosure = (): void => _test_functional_assertParameters(CustomGuardError)(
  "ObjectClosure"
)(ObjectClosure)(
  (p: (input: ObjectClosure) => ObjectClosure) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)