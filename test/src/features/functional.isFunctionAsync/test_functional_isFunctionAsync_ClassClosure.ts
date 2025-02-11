import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_functional_isFunctionAsync_ClassClosure = _test_functional_isFunctionAsync(
  "ClassClosure"
)(ClassClosure)(
  (p: (input: ClassClosure) => Promise<ClassClosure>) =>
    typia.functional.isFunction(p),
)