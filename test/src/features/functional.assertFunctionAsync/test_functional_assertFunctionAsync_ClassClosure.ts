import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ClassClosure } from "../../structures/ClassClosure";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ClassClosure = (): Promise<void> => _test_functional_assertFunctionAsync(TypeGuardError)(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => Promise<ClassClosure>) =>
    typia.functional.assertFunction(p),
)