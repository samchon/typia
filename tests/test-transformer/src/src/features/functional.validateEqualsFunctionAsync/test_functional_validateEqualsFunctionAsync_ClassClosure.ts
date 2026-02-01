import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_validateEqualsFunctionAsync_ClassClosure = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => Promise<ClassClosure>) =>
    typia.functional.validateEqualsFunction(p),
)