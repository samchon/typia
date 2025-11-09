import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ClassClosure } from "../../structures/ClassClosure";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ClassClosure = (): void => _test_functional_assertParameters(CustomGuardError)(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => ClassClosure) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)