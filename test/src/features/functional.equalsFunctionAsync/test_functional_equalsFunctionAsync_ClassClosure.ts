import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_equalsFunctionAsync_ClassClosure = (): Promise<void> => _test_functional_equalsFunctionAsync(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => Promise<ClassClosure>) =>
    typia.functional.equalsFunction(p),
)