import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ClassClosure } from "../../structures/ClassClosure";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ClassClosure = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => Promise<ClassClosure>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)